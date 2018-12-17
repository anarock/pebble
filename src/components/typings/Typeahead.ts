import * as React from "react";

type FocusEvent = (
  event: React.KeyboardEvent<HTMLInputElement> | React.FocusEvent<HTMLElement>
) => void;

export interface TypeaheadProps {
  className?: string;
  searchBox: (
    args: {
      registerChange: (text: string) => void;
      onFocus: FocusEvent;
      value: string;
    },
    props: TypeaheadProps
  ) => JSX.Element;
  debounceTime: number;
  onChange: (text: string, props: TypeaheadProps) => void;
  onSelect: (value: number | string | undefined, props: TypeaheadProps) => void;
  dropdownClassName?: string;
  initialValue?: string;
  disabled?: boolean;
  errorMessage?: string;
  placeholder: string;
  loading?: boolean;
  selected?: number | string;
  required?: boolean;
  children: React.ReactNodeArray;
  valueExtractor: (value: string | number) => string;
  onClear: () => void;
}

export interface TypeaheadState {
  value: string;
  showSuggestions: boolean;
}
