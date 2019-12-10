import { ControlProps } from "./Control";
import { Omit } from "utility-types";
import * as React from "react";
import { Interpolation } from "./emotionCustom";

export interface OptionProps<OptionType>
  extends Omit<ControlProps<OptionType>, "checked" | "type"> {
  isActive?: boolean;
  isSelected?: boolean;
  multiSelect?: boolean;
  labelStyles?: Interpolation;
  rightElement?: (props: OptionProps<OptionType>) => React.ReactNode;
}
