import * as React from "react";

export interface ControlProps {
  onChange?: (
    args: { value: React.ReactText; checked: boolean },
    e: React.MouseEvent
  ) => void;
  value: React.ReactText;
  label: React.ReactText | React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  children?: (props: ControlProps) => React.ReactNode | React.ReactNodeArray;
  type: "radio" | "checkbox";
  className?: string;
}
