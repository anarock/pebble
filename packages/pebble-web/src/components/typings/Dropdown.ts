import * as React from "react";
import { ButtonType } from "./Button";
import { Placement, Modifiers } from "popper.js";
import { Interpolation } from "./emotionCustom";

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
  styles?: Interpolation;
  dropDownStyles?: Interpolation;
  initiallyOpen?: boolean;
  isSelected?: boolean;
  disabled?: boolean;
  labelStyles?: Interpolation;
  onOutsideClick?: (isOpen: boolean) => void;
  placement?: Placement;
  modifiers?: Modifiers;
}

export interface DropdownState {
  isOpen: boolean;
}
