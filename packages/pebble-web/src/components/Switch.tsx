import * as React from "react";

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
    const { onChange, styles, label, disabled } = this.props;
    const { value } = this.state;

    return (
      <label css={[styles, fixedLabelStyle, !!disabled && disabledStyle]}>
        <span css={labelTextStyle}>{label}</span>
        <div css={[labelStyle, value && selectedLabel]}>
          <input
            type="checkbox"
            checked={value}
            css={inputStyle}
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
          <span css={[switchStyle, value && selectedSwitch]} />
        </div>
      </label>
    );
  }
}
