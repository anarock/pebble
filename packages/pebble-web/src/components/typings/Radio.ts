import { Omit } from "utility-types";
import { ControlProps } from "./Control";

export type RadioProps = Omit<ControlProps, "type" | "children">;
