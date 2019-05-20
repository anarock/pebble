import * as React from "react";
import Select from "./Select";
import Input from "./Input";
import { cx } from "emotion";
import { PhoneNumberInputProps } from "./typings/PhoneNumberInput";
import {
  wrapper,
  selectStyle,
  combinedLabelStyle
} from "./styles/PhoneNumberInput.styles";
import { labelStyle } from "./styles/Input.styles";
import { colors } from "../theme";

export default class PhoneNumberInput extends React.Component<
  PhoneNumberInputProps
> {
  onCountrySelect = (countryCode: string) => {
    this.props.onChange({
      countryCode,
      phone: this.props.phone
    });
  };

  onNumberChange = (value: string) => {
    const _value = value.replace(/\D/g, "");
    if (_value === this.props.phone) {
      return;
    }
    this.props.onChange({
      countryCode: this.props.countryCode,
      phone: _value
    });
  };

  render() {
    const {
      phone,
      countryCode,
      className,
      selectProps,
      inputProps,
      required,
      placeholder
    } = this.props;
    return (
      <div className={cx(wrapper, className)}>
        <label
          className={cx(
            labelStyle,
            "_pebble_input_label_focused",
            combinedLabelStyle
          )}
        >
          {placeholder || "Phone No."}
          {required && <span style={{ color: colors.red.base }}>&nbsp;*</span>}
        </label>
        <Select
          placeholder=""
          onChange={this.onCountrySelect}
          value={countryCode + ""}
          selected={countryCode}
          {...selectProps}
          className={cx(selectStyle, selectProps && selectProps.className)}
        >
          {this.props.children}
        </Select>
        <Input
          onChange={this.onNumberChange}
          placeholder=""
          value={phone}
          {...inputProps}
        />
      </div>
    );
  }
}
