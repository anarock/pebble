import * as React from "react";

export type Type = "primary" | "secondary" | "dropdown" | "link";

export interface ButtonProps {
  children: React.ReactNode | string;
  onClick: () => void;
  showShadow?: boolean;
  disabled?: boolean;
  type?: Type;
  isOpen?: boolean;
  large?: boolean;
  width?: number;
  className?: string;
  showRipple?: boolean;
  isSelected?: boolean;
}
