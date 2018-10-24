import { SelectProps } from "./Select";
import { InputProps } from "./Input";

export interface PhoneNumberInputProps {
  countryCode: string;
  phone: string;
  onChange: (
    { countryCode, phone }: { countryCode: string; phone: string }
  ) => void;

  // Optional
  className?: string;
  selectProps?: Partial<SelectProps>;
  inputProps?: Partial<InputProps>;
  placeholder?: string;
  required?: boolean;
}
