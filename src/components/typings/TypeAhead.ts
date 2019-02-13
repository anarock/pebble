import * as React from "react";

type FocusEvent = (
  event: React.KeyboardEvent<HTMLInputElement> | React.FocusEvent<HTMLElement>
) => void;

export interface SearchBoxArgs {
  registerChange: (text: string) => void;
  onFocus: FocusEvent;
  value: string;
}

export interface TypeaheadProps<OptionType> {
  className?: string;
  searchBox?: (
    args: SearchBoxArgs,
    props: TypeaheadProps<OptionType>
  ) => React.ReactNode;
  debounceTime: number;
  onChange: (text: string, props: TypeaheadProps<OptionType>) => void;
  onSelect: (
    value: OptionType | undefined,
    props: TypeaheadProps<OptionType>
  ) => void;
  dropdownClassName?: string;
  initialValue?: string;
  disabled?: boolean;
  errorMessage?: string;
  placeholder: string;
  loading?: boolean;
  selected?: OptionType;
  required?: boolean;
  valueExtractor: (value: OptionType) => string;
  onClear: () => void;
}

export interface TypeaheadState {
  value: string;
  showSuggestions: boolean;
}
