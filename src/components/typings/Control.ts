import * as React from "react";

export interface ControlProps {
  onChange?: (args: { value: number | string; checked: boolean }) => void;
  value: number | string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  children?: (props: ControlProps) => React.ReactNode | React.ReactNodeArray;
  type: "radio" | "checkbox";
}
