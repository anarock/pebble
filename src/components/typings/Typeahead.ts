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
  onChange: (text: string, props: TypeaheadProps) => void;
  onSelect: (value, props: TypeaheadProps) => void;
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
}

export interface TypeaheadState {
  value: string;
  showSuggestions: boolean;
}

type keys = Exclude<keyof TypeaheadProps, "onChange" | "children">;
export type CachedTypeAheadProps = Pick<TypeaheadProps, keys> & {
  children: (query: string) => Promise<React.ReactNodeArray>;
};

export type CacheTypeAheadState = {
  query: string;
  cache: {
    [query: string]: {
      promise: Promise<React.ReactNodeArray>;
      options?: React.ReactNodeArray;
    };
  };
};
