import * as React from "react";

export type ButtonType = "primary" | "secondary" | "link" | "success" | "alert";

type Children = JSX.Element | string | number | React.ReactChildren;

export interface ButtonProps {
  children: Children;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  showShadow?: boolean;
  disabled?: boolean;
  type?: ButtonType;
  size?: "x-small" | "small" | "large";
  width?: number;
  className?: string;
  showRipple?: boolean;
  loading?: boolean;
}

export interface DropDownButtonProps extends ButtonProps {
  isOpen: boolean;
  isSelected: boolean;
}
