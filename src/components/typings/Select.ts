import * as React from "react";

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
  searchBoxPlaceholder?: string;
  onSearchBoxQueryChange?: (query: string) => void;
  dropdownClassName?: string;
}
