import * as React from "react";
import { DateInputProps } from "./typings/DateInput";
import DropDown from "./DropDown";
import { dateClass, dropDownClassName } from "./styles/Date.styles";
import { format } from "date-fns";
import Calendar from "./Calendar";
import Input from "./Input";
import { cx, css } from "emotion";
// import { isDesktop } from "../utils";

const noop = () => {};

function checkDateInputSupport(): boolean {
  const input = document.createElement("input");
  if (!("valueAsDate" in input)) return false;
  const type = "date";
  input.setAttribute("type", "date");
  input.value = "\x01";
  return (
    input.type === type && (input.value !== "\x01" || !input.checkValidity())
  );
}

function checkMobileDevice(): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent
  );
}

const hasDateInputSupport = /*@__PURE__*/ checkDateInputSupport();
const isMobileDevice = /*@__PURE__*/ checkMobileDevice();

class DateInput extends React.PureComponent<DateInputProps> {
  inputRef = React.createRef<HTMLInputElement>();

  onChange = (date: Date | string) => {
    this.props.onChange(date ? new Date(date).getTime() : undefined);
  };

  onDateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.valueAsDate) {
      this.props.onChange(e.target.valueAsDate);
    } else {
      this.props.onChange(new Date(e.target.value).getTime());
    }
  };

  componentDidUpdate() {
    if (this.inputRef.current && this.props.value) {
      this.inputRef.current.valueAsDate = new Date(this.props.value);
    }
  }

  render() {
    const { value, calendarProps, inputProps } = this.props;
    const useBrowserControls = isMobileDevice && hasDateInputSupport;

    const dropDownClass = cx(dropDownClassName, {
      [css({
        display: "none"
      })]: useBrowserControls
    });

    return (
      <DropDown
        dropDownClassName={dropDownClass}
        labelComponent={({ toggleDropdown }) => (
          <Input
            {...(useBrowserControls
              ? {
                  onChange: noop,
                  type: "date",
                  value: undefined
                }
              : {
                  onChange: this.onChange,
                  type: "text",
                  value: (value && format(value, "DD/MM/YYYY")) || "",
                  onClick: toggleDropdown
                })}
            placeholder={this.props.placeholder}
            fixLabelAtTop
            {...inputProps}
            inputProps={{
              ...(useBrowserControls
                ? {
                    value: undefined,
                    onChange: this.onDateInputChange,
                    ref: this.inputRef
                  }
                : {
                    placeholder: "DD/MM/YYYY"
                  }),
              ...(inputProps && inputProps.inputProps)
            }}
          />
        )}
      >
        {({ toggle }) => (
          <Calendar
            hideShadow
            className={dateClass}
            selected={value ? new Date(value) : undefined}
            {...calendarProps}
            onChange={_date => {
              // _date as Date is a hack.
              // TODO:Aziz this is fixable, fix this.
              const date = _date as Date;
              this.onChange(date);
              toggle();
            }}
          />
        )}
      </DropDown>
    );
  }
}

export default DateInput;
