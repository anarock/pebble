import * as React from "react";
import { InputProps } from "./Input";
import { SearchProps } from "./Search";

type Selected = number | string | (number | string)[];

export interface SelectProps {
  className?: string;
  placeholder: string;
  required?: boolean;
  errorMessage?: string;
  value?: string;
  selected?: Selected;
  multiSelect?: boolean;
  onChange: (value: Selected, event: React.MouseEvent) => void;
  onApply?: (value: Selected, props: SelectProps) => void;
  onClear?: () => void;
  searchBox?: boolean;
  searchBoxProps?: Partial<SearchProps>;
  dropdownClassName?: string;
  inputProps?: Partial<InputProps>;
  fullWidthDropdown?: boolean;
}
