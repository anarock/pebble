import * as React from "react";
import Select from "./Select";
import Input from "./Input";
import { cx } from "emotion";
import { PhoneNumberInputProps } from "./typings/PhoneNumberInput";
import { wrapper, selectStyle } from "./styles/PhoneNumberInput.styles";

export default class PhoneNumberInput extends React.Component<
  PhoneNumberInputProps
> {
  onCountrySelect = countryCode => {
    this.props.onChange({
      countryCode,
      phone: this.props.phone
    });
  };

  onNumberChange = (value: string) => {
    value = value.replace(/\D/g, "");
    if (!value || (this.props.phone && value === this.props.phone)) {
      return;
    }
    this.props.onChange({
      countryCode: this.props.countryCode,
      phone: value
    });
  };

  render() {
    const {
      phone,
      countryCode,
      className,
      selectProps,
      inputProps,
      placeholder
    } = this.props;
    return (
      <div className={cx(wrapper, className)}>
        <Select
          placeholder={placeholder || "Phone No."}
          onChange={this.onCountrySelect}
          value={countryCode}
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
