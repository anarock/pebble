import { SingleSelectProps } from "./Select";
import { InputProps } from "./Input";

export interface PhoneNumberInputProps {
  countryCode: string;
  phone: string;
  onChange: (
    { countryCode, phone }: { countryCode: string; phone: string }
  ) => void;

  // Optional
  className?: string;
  selectProps?: Partial<SingleSelectProps>;
  inputProps?: Partial<InputProps>;
  placeholder?: string;
  required?: boolean;
}
