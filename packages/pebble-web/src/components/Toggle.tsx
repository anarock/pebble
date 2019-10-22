import * as React from "react";
import { cx } from "emotion";
import {
  labelStyle,
  selectedLabel,
  inputStyle,
  selectedSwitch,
  switchStyle
} from "./styles/Toggle.styles";

interface ToggleProps {
  initialValue?: boolean;
  onChange?: (value: boolean) => void;
}

interface ToggleState {
  value?: boolean;
}

export default class Toggle extends React.PureComponent<
  ToggleProps,
  ToggleState
> {
  state = {
    value: this.props.initialValue || false
  };

  render() {
    const { onChange } = this.props;
    const { value } = this.state;

    return (
      <label
        className={cx({
          [labelStyle]: true,
          [selectedLabel]: value
        })}
      >
        <input
          type="checkbox"
          onChange={e => {
            this.setState({
              value: e.target.checked
            });
            if (onChange) {
              onChange(e.target.checked);
            }
          }}
          checked={value}
          className={inputStyle}
        />
        <span
          className={cx({
            [switchStyle]: true,
            [selectedSwitch]: value
          })}
        />
      </label>
    );
  }
}
