import * as React from "react";
import { cx } from "emotion";
import {
  labelTextStyle,
  labelStyle,
  selectedLabel,
  inputStyle,
  selectedSwitch,
  switchStyle,
  fixedLabelStyle,
  disabledStyle
} from "./styles/Switch.styles";
import { SwitchProps, SwitchState } from "./typings/Switch";

export default class Switch extends React.PureComponent<
  SwitchProps,
  SwitchState
> {
  state = {
    value: this.props.initialValue || false
  };

  render() {
    const { onChange, className, label, disabled } = this.props;
    const { value } = this.state;

    return (
      <label
        className={cx(className, fixedLabelStyle, {
          [disabledStyle]: !!disabled
        })}
      >
        <span className={labelTextStyle}>{label}</span>
        <div
          className={cx(labelStyle, {
            [selectedLabel]: value
          })}
        >
          <input
            type="checkbox"
            checked={value}
            className={inputStyle}
            onChange={() => {
              this.setState({
                value: !value
              });
              if (onChange) {
                onChange(!value);
              }
            }}
            disabled={disabled}
          />
          <span
            className={cx({
              [switchStyle]: true,
              [selectedSwitch]: value
            })}
          />
        </div>
      </label>
    );
  }
}
