import * as React from "react";
import { DateInputProps, DateInputState } from "./typings/DateInput";
import DropDown from "./DropDown";
import { dateClass, dropDownClassName } from "./styles/Date.styles";
import Calendar from "./Calendar";
import Input from "./Input";
import { Rifm } from "rifm";
import { startOfDay, format } from "date-fns";
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
const useBrowserControls = isMobileDevice && hasDateInputSupport;

function dateFormat(str: string) {
  const clean = str.replace(/[^\d]+/gi, "");
  const chars = clean.split("");
  return chars.reduce(
    (r, v, index) =>
      `${r}${v}${index === 1 || index === 3 ? "/" : ""}`.substr(0, 10),
    ""
  );
}

export default class DateInput extends React.PureComponent<
  DateInputProps,
  DateInputState
> {
  inputRef = React.createRef<HTMLInputElement>();

  state: Readonly<DateInputState> = {
    stringInput: "",
    propsRef: null,
    inputRef: this.inputRef
  };

  static getDerivedStateFromProps(
    props: DateInputProps,
    state: DateInputState
  ): Partial<DateInputState> | null {
    let newState: Partial<DateInputState> | null = null;
    if (
      useBrowserControls &&
      props.inputProps &&
      props.inputProps.inputProps &&
      props.inputProps.inputProps.ref &&
      props.inputProps.inputProps.ref !== state.propsRef
    ) {
      const propsRef = props.inputProps.inputProps.ref;
      newState = {
        propsRef,
        inputRef: (el: HTMLInputElement) => {
          // @ts-ignore
          this.inputRef.current = el;
          if (typeof propsRef === "function") {
            propsRef(el);
          } else {
            // @ts-ignore
            propsRef.current = el;
          }
        }
      };
    }
    if (props.value && props.value !== state.propsValue) {
      newState = {
        ...newState,
        propsValue: props.value,
        stringInput: (props.value && format(props.value, "DD/MM/YYYY")) || ""
      };
    }
    return newState;
  }

  onCalendarDateChange = (date: Date) => {
    this.props.onChange(date.getTime());
  };

  onDateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(e.currentTarget.valueAsDate.getTime());
  };

  onInputChange = (input: string) => {
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

  componentDidUpdate() {
    if (useBrowserControls && this.inputRef.current && this.props.value) {
      this.inputRef.current.valueAsDate = new Date(this.props.value);
    }
  }

  render() {
    const { calendarProps, inputProps, placeholder } = this.props;

    const commonProps = {
      fixLabelAtTop: true,
      ...inputProps
    };

    if (useBrowserControls) {
      return (
        <Input
          onChange={noop}
          type="date"
          value={undefined}
          placeholder={placeholder}
          {...commonProps}
          inputProps={{
            value: undefined,
            onChange: this.onDateInputChange,
            ...(inputProps && inputProps.inputProps),
            ref: this.state.inputRef
          }}
        />
      );
    }

    return (
      <DropDown
        dropDownClassName={dropDownClassName}
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
                placeholder={`${placeholder} DD/MM/YYYY`}
                onClick={toggleDropdown}
                fixLabelAtTop
                {...inputProps}
                inputProps={{
                  placeholder: "DD/MM/YYYY",
                  ...(inputProps && inputProps.inputProps),
                  onChange
                }}
              />
            )}
          </Rifm>
        )}
      >
        {({ toggle }) => (
          <Calendar
            hideShadow
            className={dateClass}
            selected={this.props.value ? new Date(this.props.value) : undefined}
            {...calendarProps}
            onChange={_date => {
              // _date as Date is a hack.
              // TODO:Aziz this is fixable, fix this.
              const date = _date as Date;
              this.onCalendarDateChange(date);
              toggle();
            }}
          />
        )}
      </DropDown>
    );
  }
}
