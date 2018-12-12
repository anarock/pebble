import { storiesOf } from "@storybook/react";
import { constants, colors } from "../src";
import Option from "../src/components/Option";
import * as React from "react";
import OptionGroup from "../src/components/shared/OptionGroup";
import { css } from "emotion";
import { withState } from "@dump247/storybook-state";

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
  selectedGroups: G[];
  selectedDataPoints: D[];
  isSelected: (value: number | string) => boolean;
  groupMapping: Map<string, G>;
  dataPointMapping: Map<number, D>;
  dataPointGroupMapping: Map<D, G>;
  propOptions?: G[];
  propSelected?: number[];
  searchBoxValue: string;
}

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
    selectedGroups: [],
    selectedDataPoints: [],
    isSelected: () => false,
    groupMapping: new Map(),
    dataPointMapping: new Map(),
    dataPointGroupMapping: new Map(),
    propOptions: undefined,
    searchBoxValue: ""
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
          .reduce((arr, cur) => [...arr, ...cur.options], [])
          .map(dataPointPair)
      );

      const dataPointGroupMapping = new Map<D, G>(
        props.options
          .filter(group => group.group_label)
          .map(group =>
            group.options.map(dataPoint => [dataPoint, group] as [D, G])
          )
          .reduce((arr, cur) => [...arr, ...cur], []) // flatten
      );

      newState.groupMapping = groupMapping;
      newState.dataPointMapping = dataPointMapping;
      newState.dataPointGroupMapping = dataPointGroupMapping;
      newState.propOptions = props.options;
    }
    if (props.selected !== state.propSelected) {
      let selectedDataPoints = props.selected
        .map(id => newState.dataPointMapping.get(id) as D)
        .filter(f => f);

      const selectedGroups = [
        ...selectedDataPoints
          .reduce((map, dataPoint) => {
            const parentGroup = newState.dataPointGroupMapping.get(dataPoint);
            if (parentGroup) {
              const selectedInGroup = map.get(parentGroup);
              if (selectedInGroup) {
                selectedInGroup.push(dataPoint);
              } else {
                map.set(parentGroup, [dataPoint]);
              }
            }
            return map;
          }, new Map<G, D[]>())
          .entries()
      ]
        .filter(
          ([group, dataPoints]) => group.options.length === dataPoints.length
        )
        .map(([group, _]) => group);

      selectedDataPoints = selectedDataPoints.filter(d => {
        const parentGroup = newState.dataPointGroupMapping.get(d);
        return !parentGroup || !selectedGroups.includes(parentGroup);
      });

      newState.isSelected = (value: number | string) => {
        if (typeof value === "string") {
          const group = newState.groupMapping.get(value) as G;
          return selectedGroups.includes(group);
        }
        const dataPoint = newState.dataPointMapping.get(value) as D;
        const parentGroup = newState.dataPointGroupMapping.get(dataPoint);
        return (
          selectedDataPoints.includes(dataPoint) ||
          (!!parentGroup && selectedGroups.includes(parentGroup))
        );
      };

      newState.selectedDataPoints = selectedDataPoints;
      newState.selectedGroups = selectedGroups;
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
    if (typeof value === "string") {
      const group = this.state.groupMapping.get(value) as G;
      if (checked) {
        return this.triggerOnChange(
          this.state.selectedGroups.concat([group]),
          this.state.selectedDataPoints.filter(
            dataPoint =>
              group !== this.state.dataPointGroupMapping.get(dataPoint)
          )
        );
      } else {
        return this.triggerOnChange(
          this.state.selectedGroups.filter(g => g !== group),
          this.state.selectedDataPoints
        );
      }
    } else {
      const dataPoint = this.state.dataPointMapping.get(value) as D;
      const parentGroup = this.state.dataPointGroupMapping.get(dataPoint);
      if (checked) {
        if (parentGroup) {
          const selectedInGroup = parentGroup.options.filter(d =>
            this.state.selectedDataPoints.includes(d)
          );
          if (selectedInGroup.length === parentGroup.options.length - 1) {
            return this.triggerOnChange(
              this.state.selectedGroups.concat([parentGroup]),
              this.state.selectedDataPoints.filter(
                d => !parentGroup.options.includes(d)
              )
            );
          }
        }
        return this.triggerOnChange(
          this.state.selectedGroups,
          this.state.selectedDataPoints.concat([dataPoint])
        );
      } else {
        if (parentGroup && this.state.selectedGroups.includes(parentGroup)) {
          return this.triggerOnChange(
            this.state.selectedGroups.filter(g => g !== parentGroup),
            this.state.selectedDataPoints.concat(
              parentGroup.options.filter(d => d !== dataPoint)
            )
          );
        } else {
          return this.triggerOnChange(
            this.state.selectedGroups,
            this.state.selectedDataPoints.filter(d => d !== dataPoint)
          );
        }
      }
    }
  };

  triggerOnChange(selectedGroups: G[], selectedDataPoints: D[]) {
    const selected = ([] as number[]).concat(
      ...selectedGroups.map(g => g.options.map(d => d.id)),
      selectedDataPoints.map(d => d.id)
    );
    this.props.onChange(selected);
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
          onChange: v => this.setState({ searchBoxValue: v }),
          value: this.state.searchBoxValue
        }}
        className={css({
          maxHeight: "none"
        })}
      >
        {this.props.options
          .filter(group => group.options.length)
          .map(group => [
            group.group_label && (
              <Option
                key={`group_${group.id}`}
                value={`group_${group.group_label}`}
                label={group.group_label}
                className={css()}
              />
            ),
            ...group.options.map(o => (
              <Option
                key={o.id}
                value={o.id}
                label={o.label}
                className={
                  group.group_label &&
                  css({
                    paddingLeft: "20px",
                    "::before": {
                      background: colors.gray.lighter,
                      content: '" "',
                      width: "2px",
                      top: 0,
                      position: "absolute",
                      bottom: 0
                    }
                  })
                }
              />
            ))
          ])
          .reduce((arr, cur) => [...arr, ...cur], [])
          .filter(f => f)}
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

storiesOf("OptionGroupCheckBoxSections", module).add(
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
