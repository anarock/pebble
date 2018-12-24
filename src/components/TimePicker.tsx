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

const TimePicker: React.FunctionComponent<TimePickerProps> = props => {
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
            onChange={value => {
              // `value as number` is a escape hack because we have to handle number | string
              // and OptionGroupRadio cannot determine its type on its own.
              // TODO: Remove all `as`.
              onHourChange(value as number);
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
            onChange={value => {
              // `value as number` is a escape hack because we have to handle number | string
              // and OptionGroupRadio cannot determine its type on its own.
              // TODO: Remove all `as`.
              onMinuteChange(value as number);
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
