import { SingleSelectProps } from "./Select";
import { SimpleInputProps } from "./Input";
import { Omit } from "utility-types";

export interface PhoneNumberInputProps<OptionType = string> {
  countryCode: OptionType;
  phone: string;
  onChange: ({
    countryCode,
    phone
  }: {
    countryCode: OptionType;
    phone: string;
  }) => void;

  // Optional
  className?: string;
  selectProps?: Partial<SingleSelectProps<OptionType>>;
  inputProps?: Omit<SimpleInputProps, "value" | "onChange" | "placeholder">;
  placeholder?: string;
  required?: boolean;
  dataTestIds?: {
    phoneInput?: string;
    country?: string;
  };
}
