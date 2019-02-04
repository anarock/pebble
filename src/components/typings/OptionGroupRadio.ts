import { CommonProps, Extras } from "./OptionGroup";

export interface OptionGroupRadio<OptionType> extends CommonProps {
  onChange: (value: OptionType | undefined, extras: Extras) => void;
  selected?: OptionType;
}
