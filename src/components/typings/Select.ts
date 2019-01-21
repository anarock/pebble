import { InputProps } from "./Input";
import { SearchProps } from "./Search";
import { Extras } from "./OptionGroup";
import { Omit } from "utility-types";

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
  searchBoxProps?: Omit<SearchProps, "type">;
  dropdownClassName?: string;
  inputProps?: Omit<InputProps, "onChange" | "value" | "placeholder">;
  fullWidthDropdown?: boolean;
  onDropdownToggle?: (isOpen: boolean) => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export interface SingleSelectProps<OptionType = string | number>
  extends CommonSelectProps {
  multiSelect?: false;
  onChange: (value: OptionType, extras: Extras) => void;
  selected?: OptionType;
}

export interface MultiSelectProps<OptionType = string | number>
  extends CommonSelectProps {
  multiSelect: true;
  onChange: (value: OptionType[], extras: Extras) => void;
  onApply?: (value: OptionType[], props: SelectProps<OptionType>) => void;
  selected?: OptionType[];
}

export type SelectProps<OptionType = string | number> =
  | SingleSelectProps<OptionType>
  | MultiSelectProps<OptionType>;
