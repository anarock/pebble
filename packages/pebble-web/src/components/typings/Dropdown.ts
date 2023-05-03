import * as React from "react";
import { ButtonType } from "./Button";
import { Placement, Modifiers } from "popper.js";

type Toggle = () => void;

export interface DropdownProps {
  children: (args: { toggle: Toggle; isOpen: boolean }) => React.ReactNode;
  buttonLabel?: React.ReactNode;
  closeOnOutsideClick?: boolean;
  type?: ButtonType;
  labelComponent?: (arg: {
    isOpen: boolean;
    toggleDropdown: Toggle;
  }) => React.ReactNode;
  padding?: number | string;
  className?: string;
  dropDownClassName?: string;
  initiallyOpen?: boolean;
  isSelected?: boolean;
  disabled?: boolean;
  labelClassName?: string;
  onOutsideClick?: (isOpen:boolean) => void;
  placement?: Placement;
  modifiers?: Modifiers;
  controlled?: boolean;
  isOpen?: boolean;
}

export interface DropdownState {
  isOpen: boolean;
}
