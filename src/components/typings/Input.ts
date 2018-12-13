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

interface SimpleInputProps extends CommonInputProps {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  textArea?: false;
  type?: "text" | "date" | "password" | "number" | "email";
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
