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

interface SecondaryInputProps {
  placeholder: string;
  value?: string | number;
  onChange: (text: string) => void;
  className?: string;
  required?: boolean;
  infoText?: string;
  readOnly?: boolean;
  successMessage?: string;
  disabled?: boolean;
  errorMessage?: string;
  inputClassName?: string;
  loading?: boolean;
  message?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement> &
    React.RefAttributes<HTMLInputElement>;
}

interface SecondaryInputState {
  isFocused: boolean;
}

export default class SecondaryInput extends React.PureComponent<
  SecondaryInputProps,
  SecondaryInputState
> {
  state: Readonly<SecondaryInputState> = {
    isFocused: false
  };

  render() {
    const {
      placeholder,
      inputClassName,
      required,
      infoText,
      value,
      onChange,
      disabled,
      errorMessage,
      successMessage,
      message,
      readOnly,
      loading,
      className
    } = this.props;
    const { isFocused } = this.state;

    const _message = errorMessage || successMessage || message;

    const _inputProps = {
      disabled,
      readOnly
    };

    const inputWrapperClassName = cx(
      inputWrapperStyle,
      {
        [inputDisabledStyle]: disabled,
        [inputReadOnlyStyle]: readOnly
      },
      inputClassName
    );

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
          onFocus={() => {
            this.setState({
              isFocused: true
            });
          }}
          onBlur={() => {
            this.setState({
              isFocused: false
            });
          }}
        >
          <input
            className={inputStyle}
            value={value}
            onChange={e => {
              onChange(e.target.value || "");
            }}
            {..._inputProps}
            {...this.props.inputProps}
          />
          {!value && !isFocused && (
            <label className={placeholderStyle}>
              {placeholder}
              {required && (
                <span style={{ color: colors.red.base }}>&nbsp;*</span>
              )}
            </label>
          )}
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
