import * as React from "react";

type Selected = number | string | (number | string)[];

export interface SelectProps {
  className?: string;
  placeholder: string;
  required?: boolean;
  errorMessage?: string;
  children: React.ReactNodeArray;
  value?: string;
  selected?: Selected;
  multiSelect?: boolean;
  onChange: (value: Selected, props: SelectProps) => void;
  onApply?: (value: Selected, props: SelectProps) => void;
  onClear?: () => void;
}
