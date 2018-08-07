import * as React from "react";

type FocusEvent = (
  event: React.KeyboardEvent<HTMLInputElement> | React.FocusEvent<HTMLElement>
) => void;

export interface TypeaheadProps {
  className?: string;
  searchBox?: (
    args: {
      registerChange: (text: string) => void;
      onFocus: FocusEvent;
      value: string;
    },
    props: TypeaheadProps
  ) => JSX.Element;
  debounceTime?: number;
  rowRenderElement?: (
    item: any,
    index: number,
    selected: boolean
  ) => JSX.Element;
  onChange: (text: string, props: TypeaheadProps) => void;
  onSelect: (suggestion: any) => void;
  suggestions?: any[];
  valueExtractor?: (suggestion: any) => string;
  dropdownClassName?: string;
  initialValue?: string;
  disabled?: boolean;
  errorMessage?: string;
  placeholder: string;
  keyExtractor?: (item: any) => number | string;
  loading?: boolean;
  selected?: number | string;
}

export interface TypeaheadState {
  value: string;
  showSuggestions: boolean;
}
