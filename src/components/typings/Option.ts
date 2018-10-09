import { ControlProps } from "./Control";
import { Omit } from "utility-types";
import * as React from "react";

export interface OptionProps
  extends Omit<Omit<ControlProps, "checked">, "type"> {
  isActive?: boolean;
  isSelected?: boolean;
  multiSelect?: boolean;
  rightElement: (props: OptionProps) => React.ReactNode;
}
