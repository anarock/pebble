import * as React from "react";
import * as CSS from "csstype";
import { Interpolation } from "./emotionCustom";

export type ButtonType = "primary" | "secondary" | "link" | "success" | "alert";

export interface ButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  showShadow?: boolean;
  disabled?: boolean;
  type?: ButtonType;
  size?: "x-small" | "small" | "large";
  width?: CSS.WidthProperty<number>;
  styles?: Interpolation;
  showRipple?: boolean;
  loading?: boolean;
  filled?: boolean;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export interface DropDownButtonProps extends ButtonProps {
  isOpen: boolean;
  isSelected: boolean;
}

interface MappingColorByTypeOptions {
  textColor?: string;
  base: string;
  hover: string;
  active: string;
  disabled: string;
}

export interface MappingColorByType {
  primary: MappingColorByTypeOptions;
  secondary: MappingColorByTypeOptions;
  success: MappingColorByTypeOptions;
  alert: MappingColorByTypeOptions;
}
