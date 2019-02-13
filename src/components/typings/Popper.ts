import * as React from "react";
import { PopperProps as PopperProps_ } from "react-popper";

type Label =
  | string
  | number
  | ((args: { toggle: () => void; isOpen: boolean }) => React.ReactNode);

// @ts-ignore
export interface PopperProps extends Partial<PopperProps_> {
  label: Label;
  popperBackgroundColor?: string;
  children: (args: { toggle: () => void; isOpen: boolean }) => React.ReactNode;
  isOpen?: boolean;
  controlled?: boolean;
  popperClassName?: string;
  closeOnOutsideClick: boolean;
  onOutsideClick?: () => void;
}

export interface PopperState {
  isOpen: boolean;
}
