import * as React from "react";

export interface InputProps {
  type?: "text" | "date" | "password";
  required?: boolean;
  placeholder: string;
  onChange: (text: string) => void;
  className?: string;
  inputProps?: React.InputHTMLAttributes<any>;
  fixLabelAtTop?: boolean;
  value?: string | number;
  readOnly?: boolean;
  disabled?: boolean;
  message?: string;
  errorMessage?: string;
  successMessage?: string;
  textArea?: boolean;
}

export interface InputState {
  isFocused?: boolean;
}

export interface DateInputProps {
  onChange: (date: number) => void;
  value?: number | string;
  placeholder: string;
}
