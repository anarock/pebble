import * as React from "react";
import { cx } from "emotion";
import { colors } from "pebble-shared";
import Loader from "./Loader";
import {
  inputDisabledStyle,
  inputReadOnlyStyle,
  infoTextStyle,
  inputStyle,
  inputWrapperStyle,
  wrapperStyle,
  messageStyle,
  placeholderStyle
} from "./styles/SecondaryInput.styles";
import {
  SecondaryInputProps,
  SecondaryInputState
} from "./typings/SecondaryInput";

function getColor(
  error: string | undefined,
  success: string | undefined,
  isFocused?: boolean,
  isBorder?: boolean
) {
  let color = isBorder ? colors.gray.light : colors.gray.dark;
  if (error) {
    color = colors.red.base;
  } else if (success) {
    color = colors.emerald.base;
  } else if (isFocused) {
    color = colors.violet.base;
  }

  return color;
}

export default class SecondaryInput extends React.PureComponent<
  SecondaryInputProps,
  SecondaryInputState
> {
  state: Readonly<SecondaryInputState> = {
    isFocused: false
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

  private handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    this.props.onChange(e.target.value || "");
  };

  render() {
    const {
      placeholder,
      inputClassName,
      required,
      infoText,
      value,
      disabled,
      errorMessage,
      successMessage,
      message,
      readOnly,
      loading,
      className,
      dataTestId
    } = this.props;
    const { isFocused } = this.state;

    const _message = errorMessage || successMessage || message;

    const _inputProps = {
      "aria-label": placeholder ? placeholder : undefined,
      disabled,
      readOnly,
      value: value || "",
      className: inputStyle,
      onChange: this.handleChange
    };

    const inputWrapperClassName = cx(
      inputWrapperStyle,
      {
        [inputDisabledStyle]: !!disabled,
        [inputReadOnlyStyle]: !!readOnly
      },
      inputClassName
    );

    const placeholderClassName = cx(placeholderStyle, {
      _pebble_secondary_input_label_focused: isFocused || !!value
    });

    return (
      <div className={cx(wrapperStyle, className)}>
        <div
          className={inputWrapperClassName}
          style={{
            border: `1px solid ${getColor(
              errorMessage,
              successMessage,
              isFocused,
              true
            )}`
          }}
          onFocus={this.addFocus}
          onBlur={this.removeFocus}
        >
          <input
            {..._inputProps}
            {...this.props.inputProps}
            data-testid={dataTestId}
          />
          <label className={placeholderClassName}>
            {placeholder}
            {required && (
              <span style={{ color: colors.red.base }}>&nbsp;*</span>
            )}
          </label>
          {infoText && !loading && (value || isFocused) && (
            <label className={infoTextStyle}>{infoText}</label>
          )}
          {loading && <Loader color={colors.violet.base} scale={0.4} />}
        </div>
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
