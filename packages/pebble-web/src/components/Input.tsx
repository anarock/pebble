import * as React from "react";
import { cx } from "emotion";
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
import { colors } from "pebble-theme";
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
      className,
      inputClassName,
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

    const _inputClassName = cx(
      inputStyle,
      {
        [inputDisabledStyle]: disabled,
        [inputReadOnlyStyle]: readOnly,
        [inputTextAreaStyle]: textArea
      },
      inputClassName
    );

    const _inputProps = {
      "aria-label": placeholder,
      className: _inputClassName,
      disabled,
      onChange: this.handleChange,
      readOnly,
      value: value || ""
    };

    const highlightClassName = cx(highlightStyle, {
      _pebble_input_highlight_focused: isFocused,
      _pebble_input_highlight_state: !!_message,
      _pebble_input_highlight_read_only: readOnly,
      _pebble_input_highlight_disabled: disabled
    });

    const labelClassName = cx(labelStyle, {
      _pebble_input_label_focused: isFocused || !!value || fixLabelAtTop
    });

    const _wrapperStyle = cx(
      wrapperStyle,
      {
        _pebble_input_wrapper_textarea: textArea
      },
      className
    );

    return (
      <div
        className={_wrapperStyle}
        onFocus={this.addFocus}
        onBlur={this.removeFocus}
        onClick={onClick}
      >
        {this.props.textArea ? (
          <textarea {..._inputProps} {...this.props.inputProps} />
        ) : (
          <input type={type} {..._inputProps} {...this.props.inputProps} />
        )}

        <label className={labelClassName}>
          {placeholder}
          {required && <span style={{ color: colors.red.base }}>&nbsp;*</span>}
        </label>

        <div
          className={highlightClassName}
          style={{
            backgroundColor: getColor(errorMessage, successMessage, true)
          }}
        />

        {loading && (
          <Loader
            color={colors.violet.base}
            scale={0.6}
            className={loadingStyle}
          />
        )}

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
