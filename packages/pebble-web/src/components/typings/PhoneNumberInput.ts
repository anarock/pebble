import { SingleSelectProps } from "./Select";
import { SimpleInputProps } from "./Input";
import { Omit } from "utility-types";

export interface PhoneNumberInputProps<OptionType> {
  country: OptionType;
  phone: string;
  onChange: ({
    country,
    phone
  }: {
    country: OptionType;
    phone: string;
  }) => void;
  codeExtractor: (country: OptionType) => string;

  // Optional
  className?: string;
  selectProps?: Partial<SingleSelectProps<OptionType>>;
  inputProps?: Omit<SimpleInputProps, "value" | "onChange" | "placeholder">;
  placeholder?: string;
  required?: boolean;
}
