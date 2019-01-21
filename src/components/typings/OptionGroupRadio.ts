import { CommonProps, Extras } from "./OptionGroup";

export interface OptionGroupRadio<OptionType = string | number>
  extends CommonProps {
  onChange: (value: OptionType | undefined, extras: Extras) => void;
  selected?: OptionType;
}
