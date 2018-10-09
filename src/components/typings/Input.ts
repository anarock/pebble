import * as React from "react";

export interface InputProps {
  type?: "text" | "date" | "password" | "number" | "email";
  required?: boolean;
  placeholder: string;
  onChange: (text: string) => void;
  className?: string;
  inputClassName?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  fixLabelAtTop?: boolean;
  value?: string | number;
  readOnly?: boolean;
  disabled?: boolean;
  message?: string;
  errorMessage?: string;
  successMessage?: string;
  textArea?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  loading?: boolean;
}

export interface InputState {
  isFocused: boolean;
}
