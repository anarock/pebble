import * as React from "react";
import DropDown from "./DropDown";
import Option from "./Option";
import OptionGroupRadio from "./OptionGroupRadio";
import { cx, css } from "emotion";
import {
  timePickerWrap,
  timePickerSelected,
  hourPicker,
  minutePicker,
  optionStyle,
  seperator
} from "./styles/TimePicker.styles";
import { TimePickerProps } from "./typings/TimePicker";
import { colors } from "pebble-shared";

const HOURS = /*#__PURE__*/ [...Array(12)].map((_, i) =>
  ("00" + (i + 1).toString(10)).slice(-2)
);
const TWENTY_FOUR_HOURS = /*#__PURE__*/ [...Array(24)].map((_, i) =>
  ("00" + i.toString(10)).slice(-2)
);
const MINUTES = /*#__PURE__*/ [...Array(4)].map((_, i) =>
  ("00" + (i * 15).toString(10)).slice(-2)
);

export const iconStyle = css({
  marginLeft: 15,
  fontWeight: "bold",
  fontSize: 8,
  transition: "transform ease-out .2s",
  willTransform: "transform",
  marginTop: 2,
  color: colors.gray.dark,
  display: "inline-block"
});

export const buttonStyle = css({
  padding: "15px 20px",
  fontSize: "12px",
  color: colors.gray.darker,
  lineHeight: "9px",
  width: "105px"
});

const modifiers = {
  preventOverflow: {
    enabled: false
  },
  flip: {
    enabled: false
  }
};

const TimePicker: React.FunctionComponent<TimePickerProps> = props => {
  const {
    selectedHour,
    selectedMinute,
    onHourChange,
    onMinuteChange,
    twentyFourHourFormat
  } = props;
  const selected = !!selectedHour || selectedMinute !== undefined;

  return (
    <div
      className={cx({
        [timePickerWrap]: true,
        [timePickerSelected]: selected
      })}
    >
      <DropDown
        labelClassName={hourPicker}
        isSelected={selected}
        labelComponent={({ isOpen, toggleDropdown }) => (
          <div
            onClick={() => {
              toggleDropdown();
            }}
            className={buttonStyle}
            data-test-id="hour-label"
          >
            <span className={css({ marginRight: "15px" })}>
              {selectedHour !== undefined
                ? ("00" + selectedHour).slice(-2)
                : "Hrs"}
            </span>
            <span>
              <i
                className={cx("pi pi-arrow-drop-down", iconStyle)}
                style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
              />
            </span>
          </div>
        )}
        placement="bottom-start"
        modifiers={modifiers}
      >
        {({ toggle }) => (
          <OptionGroupRadio
            onChange={value => {
              if (value !== undefined) {
                onHourChange(value);
              }
              toggle();
            }}
            selected={selectedHour}
            className={optionStyle}
          >
            {(twentyFourHourFormat ? TWENTY_FOUR_HOURS : HOURS).map(hour => (
              <Option
                key={hour}
                value={parseInt(hour, 10)}
                label={hour}
                className={optionStyle}
              />
            ))}
          </OptionGroupRadio>
        )}
      </DropDown>
      <span className={seperator}>:</span>
      <DropDown
        labelClassName={minutePicker}
        isSelected={selected}
        labelComponent={({ isOpen, toggleDropdown }) => (
          <div
            onClick={() => {
              toggleDropdown();
            }}
            className={buttonStyle}
            data-test-id="minute-label"
          >
            <span className={css({ marginRight: "15px" })}>
              {selectedMinute !== undefined
                ? ("00" + selectedMinute).slice(-2)
                : "mins"}
            </span>
            <i
              className={cx("pi pi-arrow-drop-down", iconStyle)}
              style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
            />
          </div>
        )}
        placement="bottom-start"
        modifiers={modifiers}
      >
        {({ toggle }) => (
          <OptionGroupRadio
            onChange={value => {
              if (value !== undefined) {
                onMinuteChange(value);
              }
              toggle();
            }}
            selected={selectedMinute}
            className={optionStyle}
          >
            {MINUTES.map(min => (
              <Option
                key={min}
                value={parseInt(min, 10)}
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
