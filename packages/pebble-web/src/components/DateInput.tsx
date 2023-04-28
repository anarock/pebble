import * as React from "react";
import { DateInputProps, DateInputState } from "./typings/DateInput";
import DropDown from "./DropDown";
import {
  dateClass,
  dropDownClassName,
  inputStyle,
  wrapperStyle,
  errorStyle
} from "./styles/Date.styles";
import Calendar from "./Calendar";
import Input from "./Input";
import { Rifm } from "rifm";
import { startOfDay, format } from "date-fns";
import NativeDateInput from "./NativeDateInput";
import { UserAgentInfoContext } from "../utils/useragent";
import { cx } from "emotion";

const noop = () => {};

function dateFormat(str: string) {
  const clean = str.replace(/[^\d]+/gi, "");
  const chars = clean.split("");
  return chars.reduce(
    (r, v, index) =>
      `${r}${v}${index === 1 || index === 3 ? "/" : ""}`.substr(0, 10),
    ""
  );
}

const modifiers = {
  preventOverflow: {
    enabled: false
  },
  flip: {
    enabled: false
  }
};

export default class DateInput extends React.PureComponent<
  DateInputProps & typeof DateInput.defaultProps,
  DateInputState
> {
  static defaultProps = {
    placement: "bottom-start"
  };
  state: Readonly<DateInputState> = {
    stringInput: ""
  };

  static getDerivedStateFromProps(
    props: DateInputProps,
    state: DateInputState
  ): Partial<DateInputState> | null {
    let newState: Partial<DateInputState> | null = null;
    if (props.value !== state.propsValue) {
      newState = {
        propsValue: props.value,
        stringInput: props.value ? format(props.value, "dd/MM/yyyy") : ""
      };
    }
    return newState;
  }

  private onCalendarDateChange = (date: Date) => {
    this.props.onChange(date.getTime());
  };

  private onInputChange = (input: string) => {
    this.setState({ stringInput: input });
    // TODO: Modify when close to year 9999
    if (input.length === 10) {
      // RIFM will ensure the length of the input.
      const date = startOfDay(new Date());
      date.setFullYear(
        parseInt(input.substr(6, 4), 10),
        parseInt(input.substr(3, 5), 10) - 1,
        parseInt(input.substr(0, 2), 10)
      );
      this.props.onChange(date.getTime());
    }
  };

  render() {
    const {
      calendarProps,
      inputProps,
      placeholder,
      value: propsValue,
      disabled,
      errorMessage,
      placement,
      wrapperClassName,
      initiallyOpen
    } = this.props;

    const _wrapperClassName = cx(wrapperStyle, wrapperClassName);

    const _dropDownClassName = cx(
      dropDownClassName,
      this.props.dropDownClassName
    );
    return (
      <DropDown
        dropDownClassName={_dropDownClassName}
        labelComponent={({ toggleDropdown }) => (
          <Rifm
            value={this.state.stringInput}
            onChange={this.onInputChange}
            format={dateFormat}
          >
            {({ value, onChange }) => (
              <Input
                onChange={noop}
                type={"tel"}
                value={value}
                placeholder={placeholder}
                onClick={() => {
                  if (disabled) return;
                  toggleDropdown();
                }}
                fixLabelAtTop
                {...inputProps}
                inputProps={{
                  placeholder: "DD/MM/YYYY",
                  ...(inputProps && inputProps.inputProps),
                  onChange
                }}
                className={cx(inputStyle, inputProps && inputProps.className)}
                disabled={disabled}
              />
            )}
          </Rifm>
        )}
        className={_wrapperClassName}
        placement={placement}
        modifiers={modifiers}
        initiallyOpen={initiallyOpen}
      >
        {({ toggle }) => (
          <>
            <Calendar
              hideShadow
              className={dateClass}
              selected={propsValue ? new Date(propsValue) : undefined}
              {...calendarProps}
              range={false}
              onChange={date => {
                this.onCalendarDateChange(date);
                toggle();
              }}
            />
            {errorMessage && <div className={errorStyle}>{errorMessage}</div>}
          </>
        )}
      </DropDown>
    );
  }
}

function checkDateInputSupport(): boolean {
  try {
    const input = document.createElement("input");
    const type = "date";
    input.setAttribute("type", "date");
    input.value = "\x01";
    return (
      input.type === type && (input.value !== "\x01" || !input.checkValidity())
    );
  } catch (e) {
    return true;
  }
}

const hasDateInputSupport = /*@__PURE__*/ checkDateInputSupport();

// tslint:disable-next-line max-classes-per-file
export class BrowserBasedDateInput extends React.PureComponent<DateInputProps> {
  static contextType = UserAgentInfoContext;
  render() {
    return (
      <UserAgentInfoContext.Consumer>
        {({ userAgent }: { userAgent: string }) => {
          if (/Android|iPhone|iPad/i.test(userAgent) && hasDateInputSupport) {
            return <NativeDateInput {...this.props} />;
          }
          return <DateInput {...this.props} />;
        }}
      </UserAgentInfoContext.Consumer>
    );
  }
}
