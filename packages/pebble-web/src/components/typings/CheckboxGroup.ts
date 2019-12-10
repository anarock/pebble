import * as React from "react";
import { Interpolation } from "./emotionCustom";

export interface CheckboxGroupProps<OptionType> {
  selected: OptionType[];
  onChange: (value: OptionType[], e: React.MouseEvent) => void;
  styles?: Interpolation;
  name: string;
  disabled?: boolean;
}
