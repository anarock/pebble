import * as React from "react";

type Selected = number | string | (number | string)[];

export interface SelectProps {
  className?: string;
  placeholder: string;
  required?: boolean;
  errorMessage?: string;
  children: React.ReactNodeArray;
  onSelect: (value: Selected, props: SelectProps) => void;
  value?: string;
  selected?: Selected;
}
