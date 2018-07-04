import * as React from "react";
import { cx } from "react-emotion";
import {
  InputProps,
  InputState,
  DateInputProps
} from "@src/components/typings/Input";
import Dropdown from "@src/components/Dropdown";
import Calendar from "@src/components/Calendar";
import format from "date-fns/format";
import {
  highlightStyle,
  labelStyle,
  wrapperStyle,
  messageStyle,
  inputStyle,
  dropDownClassName,
  dateClass
} from "@src/components/styles/Input.styles";
import { colors } from "@src/theme";

function getColor(error: string, success: string, isUnderlineColor?: boolean) {
  let color = colors.gray.dark;
  if (error) {
    color = colors.red.base;
  } else if (success) {
    color = colors.emerald.base;
  } else if (isUnderlineColor) {
    color = colors.violet.base;
  }

  return color;
}

class Input extends React.PureComponent<InputProps, InputState> {
  readonly state: InputState = {
    isFocused: false
  };

  static defaultProps = {
    value: "",
    readOnly: false
  };

  private addFocus = () => {
    this.setState({
      isFocused: true
    });
  };

  private removeFocus = () => {
    this.setState({
      isFocused: false
    });
  };

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(e.target.value || "");
  };

  render() {
    const {
      type,
      placeholder,
      className,
      inputProps,
      fixLabelAtTop,
      value,
      readOnly,
      disabled,
      errorMessage,
      successMessage,
      message,
      textArea,
      required
    } = this.props;
    const { isFocused } = this.state;

    const _message = errorMessage || successMessage || message;

    const Input_ = textArea ? "textarea" : "input";

    const inputClassName = cx(inputStyle, {
      __pebble__input__disabled: disabled,
      __pebble__input__read__only: readOnly,
      __pebble__input__textarea: textArea
    });

    const highlightClassName = cx(highlightStyle, {
      __pebble__input__highlight__focused: isFocused,
      __pebble__input__highlight__state: !!_message,
      __pebble__input__highlight__read__only: readOnly,
      __pebble__input__highlight__disabled: disabled
    });

    const labelClassName = cx(labelStyle, {
      __pebble__input__label__focused: isFocused || !!value || fixLabelAtTop
    });

    const _wrapperStyle = cx(
      wrapperStyle,
      {
        __pebble__input__wrapper__textarea: textArea
      },
      className
    );

    return (
      <div
        className={_wrapperStyle}
        onFocus={this.addFocus}
        onBlur={this.removeFocus}
      >
        <label className={labelClassName}>
          {placeholder}
          {required && <span style={{ color: colors.red.base }}>&nbsp;*</span>}
        </label>

        <Input_
          className={inputClassName}
          {...inputProps}
          type={type}
          aria-label={placeholder}
          value={value || ""}
          onChange={this.handleChange}
          disabled={disabled}
          readOnly={readOnly}
        />

        <div
          className={highlightClassName}
          style={{
            backgroundColor: getColor(errorMessage, successMessage, true)
          }}
        />

        {_message && (
          <div
            className={messageStyle}
            style={{ color: getColor(errorMessage, successMessage) }}
          >
            {_message}
          </div>
        )}
      </div>
    );
  }
}

export default Input;

class DateInput extends React.PureComponent<DateInputProps> {
  onChange = (date: Date | string) => {
    this.props.onChange(date ? new Date(date).getTime() : undefined);
  };

  render() {
    const { value } = this.props;
    return (
      <Dropdown
        dropDownClassName={dropDownClassName}
        labelComponent={({ toggleDropdown }) => (
          <div onClick={toggleDropdown}>
            <Input
              onChange={this.onChange}
              type="date"
              value={format(value, "YYYY-MM-DD")}
              placeholder={this.props.placeholder}
              fixLabelAtTop
            />
          </div>
        )}
      >
        {({ toggle }) => (
          <Calendar
            hideShadow
            className={dateClass}
            selected={value ? new Date(value) : undefined}
            onChange={date => {
              this.onChange(date);
              toggle();
            }}
          />
        )}
      </Dropdown>
    );
  }
}

export { DateInput };
