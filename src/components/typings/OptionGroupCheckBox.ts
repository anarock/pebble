import * as React from "react";
import { CommonProps, Extras } from "./OptionGroup";

export interface OptionGroupCheckBoxProps extends CommonProps {
  onChange: (value: React.ReactText[], extras: Extras) => void;
  selected?: React.ReactText[];
  onApply?: (value: React.ReactText[], props: OptionGroupCheckBoxProps) => void;
  onClear?: () => void;
}
