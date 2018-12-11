import { storiesOf } from "@storybook/react";
import { constants } from "../src";
import OptionGroupCheckBox from "../src/components/OptionGroupCheckBox";
import Option from "../src/components/Option";
import * as React from "react";

interface DataPoint {
  id: number;
  label: string;
}

interface Group {
  id: number;
  group_label?: string;
  options: DataPoint[];
}

interface GroupedOptionGroupProps {
  options: Group[];
}

interface GroupedOptionGroupState {
  selectedGroups: Group[];
  selectedDataPoints: DataPoint[];
  selectedForOptionGroupCheckBox: Array<number | string>;
  searchBoxValue: string;
  groupMapping: Map<string, Group>;
  dataPointMapping: Map<number, DataPoint>;
  dataPointGroupMapping: Map<DataPoint, Group>;
  propOptions?: Group[];
}

function diffArray<T>(arr1: T[], arr2: T[]): T {
  return arr1.find(a => !arr2.includes(a)) as T;
}

const GROUPED_OPTIONS: Group[] = [
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

// This is just an example of how grouping can be done.
// Pebble remains agnostic of the data flow.
class GroupedOptionGroup extends React.Component<
  GroupedOptionGroupProps,
  GroupedOptionGroupState
> {
  state: Readonly<GroupedOptionGroupState> = {
    selectedGroups: [],
    selectedDataPoints: [],
    selectedForOptionGroupCheckBox: [],
    groupMapping: new Map(),
    dataPointMapping: new Map(),
    dataPointGroupMapping: new Map(),
    propOptions: undefined,
    searchBoxValue: ""
  };

  static getDerivedStateFromProps(
    props: GroupedOptionGroupProps,
    state: GroupedOptionGroupState
  ): Partial<GroupedOptionGroupState> {
    if (props.options === state.propOptions) {
      return {};
    }
    function groupPair(group: Group): [string, Group] {
      return [`group_${group.group_label}`, group];
    }
    const groupMapping = new Map<string, Group>(
      props.options.filter(group => group.group_label).map(groupPair)
    );

    function dataPointPair(dataPoint: DataPoint): [number, DataPoint] {
      return [dataPoint.id, dataPoint];
    }
    const dataPointMapping = new Map<number, DataPoint>(
      props.options
        .reduce((arr, cur) => [...arr, ...cur.options], [])
        .map(dataPointPair)
    );

    const dataPointGroupMapping = new Map<DataPoint, Group>(
      props.options
        .filter(group => group.group_label)
        .map(group =>
          group.options.map(
            dataPoint => [dataPoint, group] as [DataPoint, Group]
          )
        )
        .reduce((arr, cur) => [...arr, ...cur], []) // flatten
    );
    return {
      groupMapping,
      dataPointMapping,
      dataPointGroupMapping,
      propOptions: props.options
    };
  }

  computeSelectedForOptionGroupCheckBox(
    selectedGroups: Group[],
    selectedDataPoints: DataPoint[]
  ) {
    const allDataPointsIds = selectedDataPoints
      .concat(...selectedGroups.map(group => group.options))
      .map(dataPoint => dataPoint.id);
    const groupLabels = selectedGroups.map(
      group => `group_${group.group_label}`
    );

    this.setState({
      selectedGroups,
      selectedDataPoints,
      selectedForOptionGroupCheckBox: ([] as Array<string | number>).concat(
        allDataPointsIds,
        groupLabels
      )
    });
  }

  render() {
    return (
      <OptionGroupCheckBox
        selected={this.state.selectedForOptionGroupCheckBox}
        searchBox
        searchBoxProps={{
          placeholder: "Search",
          onChange: v => this.setState({ searchBoxValue: v }),
          value: this.state.searchBoxValue
        }}
        onChange={this.onChange}
      >
        {this.props.options
          .filter(group => group.options.length)
          .map(group => [
            group.group_label && (
              <Option
                key={`group_${group.id}`}
                value={`group_${group.group_label}`}
                label={group.group_label}
              />
            ),
            ...group.options.map(o => (
              <Option key={o.id} value={o.id} label={o.label} />
            ))
          ])
          .reduce((arr, cur) => [...arr, ...cur], [])
          .filter(f => f)}
      </OptionGroupCheckBox>
    );
  }

  onChange = (selected: Array<number | string>) => {
    const selectedGroupsIds = selected.filter(
      v => typeof v === "string"
    ) as string[];
    const selectedGroups: Group[] = selectedGroupsIds.map(
      groupLabel => this.state.groupMapping.get(groupLabel) as Group
    );

    const selectedDataPointIds = selected.filter(
      v => typeof v !== "string"
    ) as number[];
    const selectedDataPoints: DataPoint[] = selectedDataPointIds
      .map(id => this.state.dataPointMapping.get(id) as DataPoint)
      .filter(
        dataPoint =>
          !selectedGroups.includes(
            this.state.dataPointGroupMapping.get(dataPoint)
          )
      );

    if (selectedDataPoints.length !== this.state.selectedDataPoints.length) {
      if (selectedDataPoints > this.state.selectedDataPoints) {
        // Need to check if all in group got selected.
        const addedDataPoint: DataPoint = diffArray(
          selectedDataPoints,
          this.state.selectedDataPoints
        );
        const parentGroup: Group = this.state.dataPointGroupMapping.get(
          addedDataPoint
        );
        if (parentGroup) {
          const allSelected = !parentGroup.options.some(
            dataPoint => !selectedDataPoints.includes(dataPoint)
          );
          if (allSelected) {
            const _selectedDataPoints = selectedDataPoints.filter(dataPoint =>
              parentGroup.options.includes(dataPoint)
            );
            const _selectedGroups = selectedGroups.concat([parentGroup]);
            return this.computeSelectedForOptionGroupCheckBox(
              _selectedGroups,
              _selectedDataPoints
            );
          }
        }
        return this.computeSelectedForOptionGroupCheckBox(
          this.state.selectedGroups,
          selectedDataPoints
        );
      } else {
        // Need to check if datapoint from selected group was unselected.
        const removedDataPoint = diffArray(
          this.state.selectedDataPoints,
          selectedDataPoints
        );
        const parentGroup = this.state.dataPointGroupMapping.get(
          removedDataPoint
        );
        if (parentGroup && selectedGroups.includes(parentGroup)) {
          const _selectedGroups = selectedGroups.filter(
            group => group !== parentGroup
          );
          const _selectedDataPoints = selectedDataPoints.concat(
            parentGroup.options.filter(
              dataPoint => dataPoint !== removedDataPoint
            )
          );
          return this.computeSelectedForOptionGroupCheckBox(
            _selectedGroups,
            _selectedDataPoints
          );
        }
        return this.computeSelectedForOptionGroupCheckBox(
          this.state.selectedGroups,
          selectedDataPoints
        );
      }
    }

    if (selectedGroups.length > this.state.selectedGroups.length) {
      // Group got selected.
      const addedGroup: Group = diffArray(
        selectedGroups as Group[],
        this.state.selectedGroups as Group[]
      );
      const _selectedDataPoints: DataPoint[] = this.state.selectedDataPoints.filter(
        d => !addedGroup.options.includes(d)
      );
      return this.computeSelectedForOptionGroupCheckBox(
        selectedGroups,
        _selectedDataPoints
      );
    }
    return this.computeSelectedForOptionGroupCheckBox(
      selectedGroups,
      this.state.selectedDataPoints
    );
  };
}

storiesOf("OptionGroupCheckBoxSections", module).add(
  "Grouping and Select All",
  () => (
    <div
      style={{
        boxShadow: constants.boxShadow.elevated,
        borderRadius: constants.borderRadius,
        width: 300
      }}
    >
      <GroupedOptionGroup options={GROUPED_OPTIONS} />
    </div>
  )
);
