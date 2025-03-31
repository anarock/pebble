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
import { SwitchProps } from "./typings/Switch";

export default class Switch extends React.PureComponent<SwitchProps> {
  static defaultProps = {
    checked: false
  };

  render() {
    const { checked, onChange, className, label, disabled } = this.props;

    return (
      <label
        className={cx(className, fixedLabelStyle, {
          [disabledStyle]: !!disabled
        })}
      >
        <span className={labelTextStyle}>{label}</span>
        <div
          className={cx(labelStyle, {
            [selectedLabel]: checked,
            [disabledStyle]: !!disabled
          })}
        >
          <input
            type="checkbox"
            checked={checked}
            className={inputStyle}
            onChange={e => {
              this.setState({
                value: !checked
              });
              if (onChange) {
                onChange(!checked, e);
              }
            }}
            disabled={disabled}
          />
          <span
            className={cx({
              [switchStyle]: true,
              [selectedSwitch]: checked
            })}
          />
        </div>
      </label>
    );
  }
}
