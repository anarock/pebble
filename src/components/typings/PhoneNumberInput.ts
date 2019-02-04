import { SingleSelectProps } from "./Select";
import { InputProps } from "./Input";
import { Omit } from "utility-types";

export interface PhoneNumberInputProps {
  countryCode: string;
  phone: string;
  onChange: (
    { countryCode, phone }: { countryCode: string; phone: string }
  ) => void;

  // Optional
  className?: string;
  selectProps?: Partial<SingleSelectProps<string>>;
  inputProps?: Omit<InputProps, "value" | "onChange" | "placeholder">;
  placeholder?: string;
  required?: boolean;
}
