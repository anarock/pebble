import { InputProps } from "./Input";
import { SearchProps } from "./Search";
import { Extras } from "./OptionGroup";

export type Selected = number | string | (number | string)[] | undefined;

export interface SelectProps {
  className?: string;
  placeholder: string;
  required?: boolean;
  errorMessage?: string;
  value?: string;
  selected: Selected;
  multiSelect?: boolean;
  onChange: (value: Selected, extras: Extras) => void;
  onApply?: (value: Selected, props: SelectProps) => void;
  onClear?: () => void;
  searchBox?: boolean;
  searchBoxProps?: Partial<SearchProps>;
  dropdownClassName?: string;
  inputProps?: Partial<InputProps>;
  fullWidthDropdown?: boolean;
}
