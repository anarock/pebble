import * as React from "react";
import { PopperProps as PopperProps_ } from "react-popper";

type Label =
  | string
  | number
  | ((args: { toggle: () => void; isOpen: boolean }) => JSX.Element);

// @ts-ignore
export interface PopperProps extends Partial<PopperProps_> {
  label: Label;
  popperBackgroundColor?: string;
  children: (
    args: { toggle: () => void; isOpen: boolean }
  ) => JSX.Element;
  isOpen?: boolean;
  controlled?: boolean;
  popperClassName?: string;
  closeOnOutsideClick?: boolean;
}

export interface PopperState {
  isOpen: boolean;
}
