import { SingleSelectProps } from "./Select";
import { SimpleInputProps } from "./Input";
import { Omit } from "utility-types";

export interface PhoneNumberInputProps {
  countryCode: string;
  phone: string;
  onChange: ({
    countryCode,
    phone
  }: {
    countryCode: string;
    phone: string;
  }) => void;

  // Optional
  className?: string;
  selectProps?: Partial<SingleSelectProps<string>>;
  inputProps?: Omit<SimpleInputProps, "value" | "onChange" | "placeholder">;
  placeholder?: string;
  required?: boolean;
}
