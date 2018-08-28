import * as React from "react";

export interface CheckboxGroupProps {
  selected: (number | string)[];
  onChange: (value: (number | string)[], e: React.MouseEvent) => void;
  children: React.ReactNode | React.ReactNodeArray;
  className?: string;
  name: string;
  disabled?: boolean;
}
