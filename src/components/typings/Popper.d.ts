import * as React from "react";
import { PopperProps as PopperProps_ } from "react-popper";

export interface PopperProps extends PopperProps_ {
  label:
    | string
    | number
    | ((args?: { toggle: () => void; isOpen: boolean }) => JSX.Element);
  popperBackgroundColor?: string;
  children: (
    args: { toggle: () => void; isOpen: boolean }
  ) => React.ReactChildren | React.ReactChild;
  isOpen?: boolean;
}

export interface PopperState {
  isOpen: boolean;
}
