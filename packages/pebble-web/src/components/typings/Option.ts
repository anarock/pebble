import { ControlProps } from "./Control";
import { Omit } from "utility-types";
import * as React from "react";

export interface OptionProps<OptionType>
  extends Omit<ControlProps<OptionType>, "checked" | "type"> {
  isActive?: boolean;
  isSelected?: boolean;
  multiSelect?: boolean;
  labelClassName?: string;
  leftElement?: (props: OptionProps<OptionType>) => React.ReactNode;
  rightElement?: (props: OptionProps<OptionType>) => React.ReactNode;
}
