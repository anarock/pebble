import { SingleSelectProps } from "./Select";
import { InputProps } from "./Input";

export interface PhoneNumberInputProps {
  countryCode: string | number;
  phone: string;
  onChange: (
    { countryCode, phone }: { countryCode: string | number; phone: string }
  ) => void;

  // Optional
  className?: string;
  selectProps?: Partial<SingleSelectProps>;
  inputProps?: Partial<InputProps>;
  placeholder?: string;
  required?: boolean;
}
