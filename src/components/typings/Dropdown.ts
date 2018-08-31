import * as React from "react";
import { ButtonType } from "./Button";

type Toggle = () => void;

export interface DropdownProps {
  children: (args: { toggle: Toggle }) => JSX.Element | string;
  buttonLabel?: React.ReactChildren | string;
  closeOnClickOutside?: boolean;
  type?: ButtonType;
  labelComponent?: (
    arg: { isOpen: boolean; toggleDropdown: Toggle }
  ) => JSX.Element;
  padding?: number | string;
  className?: string;
  dropDownClassName?: string;
  initiallyOpen?: boolean;
  isSelected?: boolean;
  disabled?: boolean;
  buttonClassName?: string;
}

export interface DropdownState {
  isOpen: boolean;
}
