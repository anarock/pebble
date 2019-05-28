import { Omit } from "utility-types";
import { ControlProps } from "./Control";

export type RadioProps<OptionType> = Omit<ControlProps<OptionType>, "type">;
