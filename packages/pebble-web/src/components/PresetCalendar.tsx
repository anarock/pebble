import * as React from "react";
import Calendar from "./Calendar";

import {
  PresetCalendarProps,
  PresetCalendarState
} from "./typings/PresetCalendar";
import { Tabs, TabSection } from "./Tabs";
import Button from "./Button";
import {
  tabsStyle,
  selectedDateButton,
  unSelectedDateButton,
  dateBtnsWrap
} from "./styles/PresetCalendar.styles";

const DATE_TABS = ["Presets", "Custom"];

class PresetCalendar extends React.PureComponent<
  PresetCalendarProps,
  PresetCalendarState
> {
  state = {
    startTime: this.props.defaultValue && this.props.defaultValue[0],
    endTime: this.props.defaultValue && this.props.defaultValue[1]
  };

  render() {
    const { startTime, endTime } = this.state;
    const { defaultValue } = this.props;

    return (
      <Tabs tabs={DATE_TABS} initialSelectedTab="Presets" tabStyles={tabsStyle}>
        <TabSection section={DATE_TABS[0]}>
          <div css={dateBtnsWrap}>
            {this.props.presetDateOptions.map((btn, index) => (
              <Button
                onClick={() => {
                  this.setState({
                    startTime: btn.dateRange[0],
                    endTime: btn.dateRange[1]
                  });
                  if (this.props.onApply) {
                    this.props.onApply(btn.dateRange as [Date, Date]);
                  }
                }}
                type="primary"
                size="large"
                styles={[
                  unSelectedDateButton,
                  btn.dateRange[0] === this.state.startTime &&
                    btn.dateRange[1] === this.state.endTime &&
                    selectedDateButton
                ]}
                key={`${btn.label}-${index}`}
              >
                {btn.label}
              </Button>
            ))}
          </div>
        </TabSection>
        <TabSection section={DATE_TABS[1]}>
          <Calendar
            hideShadow
            range
            onChange={(value: Date[] | Date | undefined) => {
              if (value && Array.isArray(value)) {
                this.setState({
                  startTime: value[0],
                  endTime: value[1]
                });
                this.props.onChange(value as [Date, Date]);
              }
            }}
            selected={
              (startTime && endTime && [startTime, endTime]) || undefined
            }
            onApply={(value: Date[] | Date | undefined) => {
              if (value && Array.isArray(value)) {
                this.setState({
                  startTime: value[0],
                  endTime: value[1]
                });
                this.props.onApply(value as [Date, Date]);
              }
            }}
            onClear={() => {
              this.setState({
                startTime: defaultValue && defaultValue[0],
                endTime: defaultValue && defaultValue[1]
              });
              if (this.props.onClear) {
                this.props.onClear();
              }
            }}
          />
        </TabSection>
      </Tabs>
    );
  }
}

export default PresetCalendar;
