import { SimpleInputProps } from "./Input";
import { SearchProps } from "./Search";
import { Extras } from "./OptionGroup";
import { Omit } from "utility-types";
import { Placement, Modifiers } from "popper.js";
import { Interpolation } from "./emotionCustom";

export type SingleSelected = number | string;
export type MultiSelected = Array<number | string>;

interface CommonSelectProps<OptionType> {
  styles?: Interpolation;
  placeholder: string;
  required?: boolean;
  errorMessage?: string;
  value?: string;
  onClear?: () => void;
  searchBox?: boolean;
  searchBoxProps?: Omit<SearchProps, "type">;
  dropdownStyles?: Interpolation;
  inputProps?: Omit<SimpleInputProps, "onChange" | "value" | "placeholder">;
  fullWidthDropdown?: boolean;
  onDropdownToggle?: (isOpen: boolean) => void;
  disabled?: boolean;
  children: React.ReactNode;
  isSelected?: (value: OptionType) => boolean;
  placement?: Placement;
  modifiers?: Modifiers;
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
