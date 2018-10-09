import * as React from "react";
import Select from "./Select";
import Input from "./Input";
import Option from "./Option";
import {
  PhoneNumberInputProps,
  PhoneNumberInputState
} from "./typings/PhoneNumberInput";
import { wrapper, selectStyle } from "./styles/PhoneNumberInput.styles";

export default class PhoneNumberInput extends React.Component<
  PhoneNumberInputProps,
  PhoneNumberInputState
> {
  onCountrySelect = country_code => {
    this.props.onChange({
      country_code: country_code,
      phone: this.props.phone
    });
  };
  onNumberChange = (value: string) => {
    if (!value.match(/^\d*$/)) {
      return;
    }
    this.props.onChange({
      country_code: this.props.country_code,
      phone: value
    });
  };
  render() {
    const { countries, phone, country_code, placeholder } = this.props;
    return (
      <div className={wrapper}>
        <Select
          placeholder={placeholder || "Phone no."}
          onChange={this.onCountrySelect}
          value={country_code}
          className={selectStyle}
        >
          {countries.map(country => (
            <Option
              value={country.country_code}
              label={`${country.name} (${country.country_code})`}
            />
          ))}
        </Select>
        <Input onChange={this.onNumberChange} placeholder="" value={phone} />
      </div>
    );
  }
}
