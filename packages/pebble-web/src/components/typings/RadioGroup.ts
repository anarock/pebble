import * as React from "react";
import { Interpolation } from "./emotionCustom";

export interface RadioGroupProps<OptionType> {
  selected: OptionType;
  onChange: (value: OptionType | undefined, event: React.MouseEvent) => void;
  toggle?: boolean;
  styles?: Interpolation;
  name: string;
  disabled?: boolean;
}
