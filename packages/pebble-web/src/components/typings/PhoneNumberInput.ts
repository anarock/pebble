import { SingleSelectProps } from "./Select";
import { SimpleInputProps } from "./Input";
import { Omit } from "utility-types";
import { Interpolation } from "./emotionCustom";

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
  styles?: Interpolation;
  selectProps?: Partial<SingleSelectProps<string>>;
  inputProps?: Omit<SimpleInputProps, "value" | "onChange" | "placeholder">;
  placeholder?: string;
  required?: boolean;
}
