import * as React from "react";
import { PopperProps as PopperProps_ } from "react-popper";

// @ts-ignore
export interface PopperProps extends Partial<PopperProps_> {
  label:
    | string
    | number
    | ((args?: { toggle: () => void; isOpen: boolean }) => JSX.Element);
  popperBackgroundColor?: string;
  children: (
    args: { toggle: () => void; isOpen: boolean }
  ) => React.ReactChildren | React.ReactChild;
  isOpen?: boolean;
  controlled?: boolean;
}

export interface PopperState {
  isOpen: boolean;
}
