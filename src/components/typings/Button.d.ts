import * as React from "react";
import {ButtonType} from "@src/components/Button";

export interface ButtonProps {
  children: React.ReactNode | string;
  onClick: () => void;
  showShadow?: boolean;
  disabled?: boolean;
  type?: ButtonType;
  isOpen?: boolean;
  large?: boolean;
  width?: number;
  className?: string;
  showRipple?: boolean;
  isSelected?: boolean;
}
