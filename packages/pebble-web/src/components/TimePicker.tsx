import * as React from "react";
import DropDown from "./DropDown";
import Option from "./Option";
import OptionGroupRadio from "./OptionGroupRadio";
import css from "@emotion/css";
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
  lineHeight: "9px"
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
  const { selectedHour, selectedMinute, onHourChange, onMinuteChange } = props;
  const selected = !!selectedHour || selectedMinute !== undefined;

  return (
    <div css={[timePickerWrap, selected && timePickerSelected]}>
      <DropDown
        labelStyles={hourPicker}
        isSelected={selected}
        labelComponent={({ isOpen, toggleDropdown }) => (
          <div
            onClick={() => {
              toggleDropdown();
            }}
            css={buttonStyle}
            data-test-id="hour-label"
          >
            <span css={css({ marginRight: "15px" })}>
              {selectedHour ? selectedHour : "Hrs"}
            </span>
            <span>
              <i
                className="pi pi-arrow-drop-down"
                css={iconStyle}
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
              // `value as number` is a escape hack because we have to handle number | string
              // and OptionGroupRadio cannot determine its type on its own.
              // TODO: Remove all `as`.
              onHourChange(value as number);
              toggle();
            }}
            selected={selectedHour}
            styles={optionStyle}
          >
            {HOURS.map(hour => (
              <Option
                key={hour}
                value={parseInt(hour, 10)}
                label={hour}
                styles={optionStyle}
              />
            ))}
          </OptionGroupRadio>
        )}
      </DropDown>
      <span css={seperator}>:</span>
      <DropDown
        labelStyles={minutePicker}
        isSelected={selected}
        labelComponent={({ isOpen, toggleDropdown }) => (
          <div
            onClick={() => {
              toggleDropdown();
            }}
            css={buttonStyle}
            data-test-id="minute-label"
          >
            <span css={css({ marginRight: "15px" })}>
              {selectedMinute !== undefined ? selectedMinute : "mins"}
            </span>
            <i
              className="pi pi-arrow-drop-down"
              css={iconStyle}
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
              // `value as number` is a escape hack because we have to handle number | string
              // and OptionGroupRadio cannot determine its type on its own.
              // TODO: Remove all `as`.
              onMinuteChange(value as number);
              toggle();
            }}
            selected={selectedMinute}
            styles={optionStyle}
          >
            {MINUTES.map(min => (
              <Option
                key={min}
                value={parseInt(min, 10)}
                label={min}
                styles={optionStyle}
              />
            ))}
          </OptionGroupRadio>
        )}
      </DropDown>
    </div>
  );
};

export default TimePicker;
