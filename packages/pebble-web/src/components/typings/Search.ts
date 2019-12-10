import * as React from "react";
import { Interpolation } from "./emotionCustom";

export interface SearchProps {
  type: "small" | "large" | "table";
  onChange: (text: string) => void;
  value: string;
  placeholder: string;
  showSearchIcon?: boolean;
  styles?: Interpolation;
  clearable?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}
