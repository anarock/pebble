import * as React from "react";

interface CommonInputProps {
  placeholder: string;
  onChange: (text: string) => void;
  value?: string | number;
  className?: string;
  disabled?: boolean;
  errorMessage?: string;
  fixLabelAtTop?: boolean;
  inputClassName?: string;
  loading?: boolean;
  message?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  readOnly?: boolean;
  required?: boolean;
  successMessage?: string;
}

export interface SimpleInputProps extends CommonInputProps {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement> &
    React.RefAttributes<HTMLInputElement>;
  textArea?: false;
  type?: "text" | "date" | "password" | "number" | "email" | "tel";
}

interface TextAreaInputProps extends CommonInputProps {
  inputProps?: React.InputHTMLAttributes<HTMLTextAreaElement>;
  textArea: true;
  type?: undefined;
}

export type InputProps = SimpleInputProps | TextAreaInputProps;

export interface InputState {
  isFocused: boolean;
}
