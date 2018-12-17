import * as React from "react";

export interface RadioGroupProps {
  selected: number | string;
  onChange: (
    value: number | string | undefined,
    event: React.MouseEvent
  ) => void;
  children: React.ReactNode | React.ReactNodeArray;
  toggle?: boolean;
  className?: string;
  name: string;
  disabled?: boolean;
}
