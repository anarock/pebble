import * as React from "react";

export interface ControlProps {
  onChange?: (
    args: { value: string | number; checked: boolean },
    e: React.MouseEvent
  ) => void;
  value: number | string | {[key : string | number ]: stirng | number};
  label: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  children?: (props: ControlProps) => React.ReactNode;
  type: "radio" | "checkbox";
  className?: string;
}
