import { CommonProps, Extras } from "./OptionGroup";

export interface OptionGroupCheckBoxProps<OptionType> extends CommonProps {
  onChange: (value: OptionType[], extras: Extras) => void;
  selected?: OptionType[];
  isSelected?: (value: OptionType) => boolean;
  onApply?: (
    value: OptionType[],
    props: OptionGroupCheckBoxProps<OptionType>
  ) => void;
  onClear?: () => void;
}
