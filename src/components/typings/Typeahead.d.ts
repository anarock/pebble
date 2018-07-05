import * as React from "react";

export interface TypeaheadProps {
  className?: string;
  searchBox: (
    args: {
      registerChange: (text: string) => void;
      onFocus: (
        event:
          | React.KeyboardEvent<HTMLInputElement>
          | React.FocusEvent<HTMLElement>
      ) => void;
      value: string;
    }
  ) => JSX.Element;
  debounceTime?: number;
  rowRenderElement: (
    item: any,
    index: number,
    selected: boolean
  ) => JSX.Element;
  onChange: (text: string, props: TypeaheadProps) => void;
  onSelect: (suggestion: any) => void;
  suggestions?: any[];
  valueExtractor: (suggestion: any) => string;
  dropdownClassName?: string;
  initialValue?: string;
}

export interface TypeaheadState {
  value: string;
  showSuggestions: boolean;
}
