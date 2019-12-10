import { Interpolation } from "./emotionCustom";

export interface SecondaryInputProps {
  placeholder: string;
  value?: string | number;
  onChange: (text: string) => void;
  styles?: Interpolation;
  required?: boolean;
  infoText?: string;
  readOnly?: boolean;
  successMessage?: string;
  disabled?: boolean;
  errorMessage?: string;
  inputStyles?: Interpolation;
  loading?: boolean;
  message?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement> &
    React.RefAttributes<HTMLInputElement>;
}

export interface SecondaryInputState {
  isFocused: boolean;
}
