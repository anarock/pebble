import * as React from "react";

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
      inputStyles,
      required,
      infoText,
      value,
      disabled,
      errorMessage,
      successMessage,
      message,
      readOnly,
      loading,
      styles
    } = this.props;
    const { isFocused } = this.state;

    const _message = errorMessage || successMessage || message;

    const _inputProps = {
      "aria-label": placeholder ? placeholder : undefined,
      disabled,
      readOnly,
      value: value || "",
      css: inputStyle,
      onChange: this.handleChange
    };

    const inputWrapperClassName = [
      inputWrapperStyle,
      !!disabled && inputDisabledStyle,
      !!readOnly && inputReadOnlyStyle,
      inputStyles
    ];

    const placeholderClassName = [
      placeholderStyle,
      isFocused || (!!value && "_pebble_secondary_input_label_focused")
    ];

    return (
      <div css={[wrapperStyle, styles]}>
        <div
          css={inputWrapperClassName}
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
          <input {..._inputProps} {...this.props.inputProps} />
          <label css={placeholderClassName}>
            {placeholder}
            {required && (
              <span style={{ color: colors.red.base }}>&nbsp;*</span>
            )}
          </label>
          {infoText && !loading && (value || isFocused) && (
            <label css={infoTextStyle}>{infoText}</label>
          )}
          {loading && <Loader color={colors.violet.base} scale={0.4} />}
        </div>
        {_message && (
          <div
            css={messageStyle}
            style={{ color: getColor(errorMessage, successMessage) }}
          >
            {_message}
          </div>
        )}
      </div>
    );
  }
}
