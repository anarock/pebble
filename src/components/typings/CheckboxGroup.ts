import * as React from "react";

export interface CheckboxGroupProps {
  selected: (number | string)[];
  onChange: (value: (number | string)[], props: CheckboxGroupProps) => void;
  children: React.ReactNode | React.ReactNodeArray;
  className?: string;
  name: string;
  disabled?: boolean;
}
