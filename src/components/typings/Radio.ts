import { Omit } from "utility-types";
import { ControlProps } from "./Control";

export type RadioProps<OptionType = string | number> = Omit<
  ControlProps<OptionType>,
  "type" | "children"
>;
