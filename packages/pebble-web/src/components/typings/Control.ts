import * as React from "react";
import { Interpolation } from "./emotionCustom";

export interface ControlProps<OptionType> {
  onChange?: (
    args: { value: OptionType; checked: boolean },
    e: React.MouseEvent
  ) => void;
  value: OptionType;
  label: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  children?: (props: ControlProps<OptionType>) => React.ReactNode;
  type: "radio" | "checkbox";
  styles?: Interpolation;
}
