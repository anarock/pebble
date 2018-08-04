import * as React from "react";

export type ButtonType = "primary" | "secondary" | "dropdown" | "link";

export interface ButtonProps {
  children: JSX.Element | string | number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  showShadow?: boolean;
  disabled?: boolean;
  type?: ButtonType;
  isOpen?: boolean;
  large?: boolean;
  width?: number;
  className?: string;
  showRipple?: boolean;
  isSelected?: boolean;
  loading?: boolean;
}
