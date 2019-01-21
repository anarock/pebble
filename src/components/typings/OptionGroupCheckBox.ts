import { CommonProps, Extras } from "./OptionGroup";

export interface OptionGroupCheckBoxProps<OptionType = string | number>
  extends CommonProps {
  onChange: (value: OptionType[], extras: Extras) => void;
  selected?: OptionType[];
  onApply?: (
    value: OptionType[],
    props: OptionGroupCheckBoxProps<OptionType>
  ) => void;
  onClear?: () => void;
}
