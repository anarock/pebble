import { InputProps } from "./Input";
import { SearchProps } from "./Search";
import { Extras } from "./OptionGroup";
import { Omit } from "utility-types";

export type SingleSelected = number | string;
export type MultiSelected = Array<number | string>;

interface CommonSelectProps<OptionType> {
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
  isSelected?: (value: OptionType) => boolean;
}

export interface SingleSelectProps<OptionType>
  extends CommonSelectProps<OptionType> {
  multiSelect?: false;
  onChange: (value: OptionType, extras: Extras) => void;
  /**
   * @deprecated use isSelected
   */
  selected?: OptionType;
}

export interface MultiSelectProps<OptionType>
  extends CommonSelectProps<OptionType> {
  multiSelect: true;
  onChange: (value: OptionType[], extras: Extras) => void;
  onApply?: (value: OptionType[], props: SelectProps<OptionType>) => void;
  /**
   * @deprecated use isSelected
   */
  selected?: OptionType[];
}

export type SelectProps<OptionType> =
  | SingleSelectProps<OptionType>
  | MultiSelectProps<OptionType>;
