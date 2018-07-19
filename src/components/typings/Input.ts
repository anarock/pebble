import * as React from "react";

export interface InputProps {
  type?: "text" | "date" | "password" | "number";
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
