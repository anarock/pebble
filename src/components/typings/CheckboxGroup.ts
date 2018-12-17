import * as React from "react";

export interface CheckboxGroupProps {
  selected: Array<number | string>;
  onChange: (value: Array<number | string>, e: React.MouseEvent) => void;
  children: React.ReactNode | React.ReactNodeArray;
  className?: string;
  name: string;
  disabled?: boolean;
}
