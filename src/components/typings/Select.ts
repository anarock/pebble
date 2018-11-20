import { InputProps } from "./Input";
import { SearchProps } from "./Search";
import { Extras } from "./OptionGroup";

export type Selected = SingleSelected | MultiSelected;

export type SingleSelected = number | string;
export type MultiSelected = Array<number | string>;

interface CommonSelectProps {
  className?: string;
  placeholder: string;
  required?: boolean;
  errorMessage?: string;
  value?: string;
  onClear?: () => void;
  searchBox?: boolean;
  searchBoxProps?: Partial<SearchProps>;
  dropdownClassName?: string;
  inputProps?: Partial<InputProps>;
  fullWidthDropdown?: boolean;
  onDropdownToggle?: (isOpen: boolean) => void;
}

export interface SingleSelectProps extends CommonSelectProps {
  multiSelect?: false;
  onChange: (value: SingleSelected, extras: Extras) => void;
  selected?: SingleSelected;
}

export interface MultiSelectProps extends CommonSelectProps {
  multiSelect: true;
  onChange: (value: MultiSelected, extras: Extras) => void;
  onApply?: (value: MultiSelected, props: SelectProps) => void;
  selected?: MultiSelected;
}

export type SelectProps = SingleSelectProps | MultiSelectProps;
