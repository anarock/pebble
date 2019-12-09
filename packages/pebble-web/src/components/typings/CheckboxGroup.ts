import * as React from "react";
import { Interpolation } from "@emotion/css";

export interface CheckboxGroupProps<OptionType> {
  selected: OptionType[];
  onChange: (value: OptionType[], e: React.MouseEvent) => void;
  styles?: Interpolation;
  name: string;
  disabled?: boolean;
}
