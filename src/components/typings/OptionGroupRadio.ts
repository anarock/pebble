import { CommonProps, Extras } from "./OptionGroup";

export interface OptionGroupRadio<OptionType> extends CommonProps {
  onChange: (value: OptionType | undefined, extras: Extras) => void;
  /**
   * @deprecated use isSelected
   */
  selected?: OptionType;
  isSelected?: (value: OptionType) => boolean;
}
