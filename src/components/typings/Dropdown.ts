import * as React from "react";
import { ButtonType } from "./Button";

type Toggle = () => void;

export interface DropdownProps {
  children: (args: { toggle: Toggle }) => JSX.Element | string;
  buttonLabel?: React.ReactChildren | string;
  closeOnOutsideClick?: boolean;
  type?: ButtonType;
  labelComponent?: (
    arg: { isOpen: boolean; toggleDropdown: Toggle }
  ) => JSX.Element;
  className?: string;
  dropDownClassName?: string;
  initiallyOpen?: boolean;
  isSelected?: boolean;
  disabled?: boolean;
  labelClassName?: string;
}

export interface DropdownState {
  isOpen: boolean;
}
