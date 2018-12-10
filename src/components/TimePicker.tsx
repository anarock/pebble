import * as React from "react";
import DropDown from "./DropDown";
import Option from "./Option";
import OptionGroupRadio from "./OptionGroupRadio";
import { cx } from "emotion";
import {
  timePickerWrap,
  timePickerSelected,
  hourPicker,
  minutePicker,
  optionStyle,
  seperator
} from "./styles/TimePicker.styles";
import { TimePickerProps } from "./typings/TimePicker";

const HOURS = [...Array(12)].map((_, i) => i + 1);
const MINUTES = [...Array(4)].map((_, i) => i * 15);

const TimePicker: React.SFC<TimePickerProps> = props => {
  const { selectedHour, selectedMinute, onHourChange, onMinuteChange } = props;
  const selected = !!selectedHour || selectedMinute !== undefined;

  return (
    <div
      className={cx({
        [timePickerWrap]: true,
        [timePickerSelected]: selected
      })}
    >
      <DropDown
        buttonLabel={`${selectedHour ? selectedHour : "Hrs"}`}
        labelClassName={hourPicker}
        isSelected={selected}
      >
        {({ toggle }) => (
          <OptionGroupRadio
            onChange={(value: number) => {
              onHourChange(value);
              toggle();
            }}
            selected={selectedHour}
            className={optionStyle}
          >
            {HOURS.map(hour => (
              <Option
                key={hour}
                value={hour}
                label={hour}
                className={optionStyle}
              />
            ))}
          </OptionGroupRadio>
        )}
      </DropDown>
      <span className={seperator}>:</span>
      <DropDown
        buttonLabel={`${
          selectedMinute !== undefined ? selectedMinute : "mins"
        }`}
        labelClassName={minutePicker}
        isSelected={selected}
      >
        {({ toggle }) => (
          <OptionGroupRadio
            onChange={(value: number) => {
              onMinuteChange(value);
              toggle();
            }}
            selected={selectedMinute}
            className={optionStyle}
          >
            {MINUTES.map(min => (
              <Option
                key={min}
                value={min}
                label={min}
                className={optionStyle}
              />
            ))}
          </OptionGroupRadio>
        )}
      </DropDown>
    </div>
  );
};

export default TimePicker;
