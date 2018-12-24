import { storiesOf } from "@storybook/react";
import { constants, colors } from "../src";
import Option from "../src/components/Option";
import * as React from "react";
import OptionGroup from "../src/components/shared/OptionGroup";
import { css } from "emotion";
import { withState } from "@dump247/storybook-state";
import matchSorter from "match-sorter";

interface DataPoint {
  id: number;
  label: string;
}

interface Group<D extends DataPoint> {
  id: number;
  group_label?: string;
  options: D[];
}

interface GroupedOptionGroupProps<D extends DataPoint, G extends Group<D>> {
  options: G[];
  selected: number[];
  onChange: (selected: number[]) => void;
}

interface GroupedOptionGroupState<D extends DataPoint, G extends Group<D>> {
  selectedDataPoints: Set<D>;
  isSelected: (value: number | string) => boolean;
  groupMapping: Map<string, G>;
  dataPointMapping: Map<number, D>;
  propOptions?: G[];
  propSelected?: number[];
  searchBoxValue: string;
  optionGroupChildren: JSX.Element[];
}

const subOptionClass = css({
  paddingLeft: "40px",
  "::before": {
    background: colors.gray.lighter,
    content: '" "',
    width: "2px",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "20px"
  }
});

// This is just an example of how grouping can be done.
// Pebble remains agnostic of the data flow.
class GroupedOptionGroup<
  D extends DataPoint,
  G extends Group<D>
> extends React.Component<
  GroupedOptionGroupProps<D, G>,
  GroupedOptionGroupState<D, G>
> {
  state: Readonly<GroupedOptionGroupState<D, G>> = {
    selectedDataPoints: new Set<D>(),
    isSelected: () => false,
    groupMapping: new Map(),
    dataPointMapping: new Map(),
    propOptions: undefined,
    searchBoxValue: "",
    optionGroupChildren: []
  };

  static getDerivedStateFromProps<D extends DataPoint, G extends Group<D>>(
    props: GroupedOptionGroupProps<D, G>,
    state: GroupedOptionGroupState<D, G>
  ): Partial<GroupedOptionGroupState<D, G>> {
    const newState: GroupedOptionGroupState<D, G> = { ...state };
    if (props.options !== state.propOptions) {
      function groupPair(group: G): [string, G] {
        return [`group_${group.group_label}`, group];
      }
      const groupMapping = new Map<string, G>(
        props.options.filter(group => group.group_label).map(groupPair)
      );

      function dataPointPair(dataPoint: D): [number, D] {
        return [dataPoint.id, dataPoint];
      }
      const dataPointMapping = new Map<number, D>(
        props.options
          .reduce((arr, cur) => [...arr, ...cur.options], [] as D[])
          .map(dataPointPair)
      );

      newState.groupMapping = groupMapping;
      newState.dataPointMapping = dataPointMapping;
      newState.propOptions = props.options;

      // Comment this line if you don't want to retain search input retained when options are changed.
      newState.searchBoxValue = "";

      newState.optionGroupChildren = newState.optionGroupChildren = GroupedOptionGroup.generateGroupedOption(
        newState.searchBoxValue,
        props.options
      );
    }
    if (props.selected !== state.propSelected) {
      const selectedDataPoints = new Set<D>(
        props.selected
          .map(id => newState.dataPointMapping.get(id) as D)
          .filter(f => f)
      );

      const selectedGroups = new Set<G>(
        props.options.filter(group => {
          return (
            group.group_label &&
            !group.options.some(dataPoint => !selectedDataPoints.has(dataPoint))
          );
        })
      );

      newState.isSelected = (value: number | string) => {
        if (typeof value === "string") {
          const group = newState.groupMapping.get(value) as G;
          return selectedGroups.has(group);
        }
        const dataPoint = newState.dataPointMapping.get(value) as D;
        return selectedDataPoints.has(dataPoint);
      };
      newState.selectedDataPoints = selectedDataPoints;
    }
    return newState;
  }

  handleChange = ({
    value,
    checked
  }: {
    value: string | number;
    checked: boolean;
  }) => {
    const { selectedDataPoints } = this.state;
    const _selectedDataPoints = new Set(selectedDataPoints);
    if (typeof value === "string") {
      const group = this.state.groupMapping.get(value) as G;
      if (checked) {
        group.options.forEach(d => {
          _selectedDataPoints.add(d);
        });
        return this.triggerOnChange(_selectedDataPoints);
      } else {
        group.options.forEach(d => {
          _selectedDataPoints.delete(d);
        });
        return this.triggerOnChange(_selectedDataPoints);
      }
    } else {
      const dataPoint = this.state.dataPointMapping.get(value) as D;
      if (checked) {
        _selectedDataPoints.add(dataPoint);
        return this.triggerOnChange(_selectedDataPoints);
      } else {
        _selectedDataPoints.delete(dataPoint);
        return this.triggerOnChange(_selectedDataPoints);
      }
    }
  };

  triggerOnChange(selectedDataPoints: Set<D>) {
    this.props.onChange(Array.from(selectedDataPoints).map(d => d.id));
  }

  onSearchBoxValueChange = (v: string) => {
    this.setState({
      searchBoxValue: v,
      optionGroupChildren: GroupedOptionGroup.generateGroupedOption(
        v,
        this.props.options
      )
    });
  };

  static generateGroupedOption<D extends DataPoint, G extends Group<D>>(
    searchBoxValue: string,
    options: G[]
  ) {
    if (searchBoxValue) {
      return matchSorter(
        ([] as D[]).concat(...options.map(o => o.options)),
        searchBoxValue,
        { keys: ["label"] }
      ).map(o => <Option key={o.id} value={o.id} label={o.label} />);
    }
    return ([] as JSX.Element[]).concat(
      ...options
        .filter(group => group.options.length)
        .map(
          group =>
            [
              group.group_label && (
                <Option
                  key={`group_${group.id}`}
                  value={`group_${group.group_label}`}
                  label={group.group_label}
                />
              ),
              ...group.options.map(o => (
                <Option
                  key={o.id}
                  value={o.id}
                  label={o.label}
                  className={group.group_label && subOptionClass}
                />
              ))
            ].filter(f => f) as JSX.Element[]
        )
    );
  }

  render() {
    return (
      <OptionGroup
        isSelected={this.state.isSelected}
        multiSelect
        handleChange={this.handleChange}
        searchBox
        searchBoxProps={{
          placeholder: "Search",
          onChange: this.onSearchBoxValueChange,
          value: this.state.searchBoxValue
        }}
        className={css({
          maxHeight: "none"
        })}
      >
        {this.state.optionGroupChildren}
      </OptionGroup>
    );
  }
}

const GROUPED_OPTIONS: Array<Group<DataPoint>> = [
  {
    id: 0,
    group_label: "Online",
    options: [
      {
        id: 1,
        label: "example.com"
      },
      {
        id: 2,
        label: "sample.org"
      }
    ]
  },
  {
    id: 1,
    options: [
      {
        id: 3,
        label: "Vendor Company"
      }
    ]
  },
  {
    id: 2,
    group_label: "Offline",
    options: [
      {
        id: 4,
        label: "Hoardings"
      },
      {
        id: 5,
        label: "Newspapers"
      }
    ]
  },
  {
    id: 3,
    options: [
      {
        id: 6,
        label: "Affiliate Entity"
      }
    ]
  }
];

storiesOf("Recipes/OptionGroupCheckBoxSections", module).add(
  "Grouping and Select All",
  withState({
    selected: [] as number[]
  })(({ store }) => (
    <div
      style={{
        boxShadow: constants.boxShadow.elevated,
        borderRadius: constants.borderRadius,
        position: "relative",
        width: 300
      }}
    >
      <GroupedOptionGroup
        selected={store.state.selected}
        options={GROUPED_OPTIONS}
        onChange={selected => store.set({ selected })}
      />
    </div>
  ))
);
