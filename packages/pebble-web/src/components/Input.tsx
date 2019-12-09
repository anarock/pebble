import * as React from "react";

import { InputProps, InputState } from "./typings/Input";
import {
  highlightStyle,
  labelStyle,
  wrapperStyle,
  messageStyle,
  inputStyle,
  inputReadOnlyStyle,
  inputDisabledStyle,
  inputTextAreaStyle,
  loadingStyle
} from "./styles/Input.styles";
import { colors } from "pebble-shared";
import Loader from "./Loader";

function getColor(
  error: string | undefined,
  success: string | undefined,
  isUnderlineColor?: boolean
) {
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

  private handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    this.props.onChange(e.target.value || "");
  };

  render() {
    const {
      type,
      placeholder,
      styles,
      inputStyles: overridenInputStyles,
      fixLabelAtTop,
      value,
      readOnly,
      disabled,
      errorMessage,
      successMessage,
      message,
      textArea,
      required,
      onClick,
      loading
    } = this.props;
    const { isFocused } = this.state;

    const _message = errorMessage || successMessage || message;

    const _inputClassName = [
      inputStyle,
      !!disabled && inputDisabledStyle,
      !!readOnly && inputReadOnlyStyle,
      !!textArea && inputTextAreaStyle,
      overridenInputStyles
    ];

    const _inputProps = {
      "aria-label": placeholder ? placeholder : undefined,
      css: _inputClassName,
      disabled,
      onChange: this.handleChange,
      readOnly,
      value: value || ""
    };

    const highlightClassName = [
      !!isFocused && "_pebble_input_highlight_focused",
      !!errorMessage || (!!successMessage && "_pebble_input_highlight_state"),
      !!readOnly && "_pebble_input_highlight_read_only",
      !!disabled && "_pebble_input_highlight_disabled"
    ]
      .filter(f => f)
      .join(" ");

    const labelClassName = !!(isFocused || !!value || fixLabelAtTop)
      ? "_pebble_input_label_focused"
      : "";

    return (
      <div
        css={[wrapperStyle, styles]}
        className={textArea ? "_pebble_input_wrapper_textarea" : ""}
        onFocus={this.addFocus}
        onBlur={this.removeFocus}
        onClick={onClick}
      >
        {this.props.textArea ? (
          <textarea {..._inputProps} {...this.props.inputProps} />
        ) : (
          <input type={type} {..._inputProps} {...this.props.inputProps} />
        )}

        <label css={labelStyle} className={labelClassName}>
          {placeholder}
          {required && <span style={{ color: colors.red.base }}>&nbsp;*</span>}
        </label>

        <div
          css={highlightStyle}
          className={highlightClassName}
          style={{
            backgroundColor: getColor(errorMessage, successMessage, true)
          }}
        />

        {loading && (
          <Loader
            color={colors.violet.base}
            scale={0.6}
            styles={loadingStyle}
          />
        )}

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

export default Input;
