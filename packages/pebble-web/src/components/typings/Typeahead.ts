import * as React from "react";
import { SimpleInputProps } from "./Input";
import { Interpolation } from "./emotionCustom";

type FocusEvent = (
  event: React.KeyboardEvent<HTMLInputElement> | React.FocusEvent<HTMLElement>
) => void;

export interface SearchBoxArgs {
  registerChange: (text: string) => void;
  onFocus: FocusEvent;
  value: string;
}

export interface TypeaheadProps<OptionType> {
  styles?: Interpolation;
  searchBox?: (
    args: SearchBoxArgs,
    props: TypeaheadProps<OptionType>
  ) => React.ReactNode;
  debounceTime?: number;
  onChange: (text: string, props: TypeaheadProps<OptionType>) => void;
  onSelect: (
    value: OptionType | undefined,
    props: TypeaheadProps<OptionType>
  ) => void;
  dropdownStyles?: Interpolation;
  initialValue?: string;
  disabled?: boolean;
  errorMessage?: string;
  placeholder: string;
  loading?: boolean;
  selected?: OptionType;
  required?: boolean;
  valueExtractor: (value: OptionType) => string;
  onClear?: () => void;
  inputProps?: Omit<SimpleInputProps, "onChange" | "value" | "placeholder">;
}

export interface TypeaheadState {
  value: string;
  showSuggestions: boolean;
}
