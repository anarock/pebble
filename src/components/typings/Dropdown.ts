import * as React from "react";
import { ButtonType } from "./Button";

type Toggle = () => void;

export interface DropdownProps {
  children: (args: { toggle: Toggle; isOpen: boolean }) => React.ReactNode;
  buttonLabel?: React.ReactNode;
  closeOnOutsideClick?: boolean;
  type?: ButtonType;
  labelComponent?: (
    arg: { isOpen: boolean; toggleDropdown: Toggle }
  ) => React.ReactNode;
  padding?: number | string;
  className?: string;
  dropDownClassName?: string;
  initiallyOpen?: boolean;
  isSelected?: boolean;
  disabled?: boolean;
  labelClassName?: string;
  onOutsideClick?: (isOpen: boolean) => void;
}

export interface DropdownState {
  isOpen: boolean;
}
