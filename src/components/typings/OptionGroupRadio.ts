import * as React from "react";
import { CommonProps, Extras } from "./OptionGroup";

export interface OptionGroupRadio extends CommonProps {
  onChange: (value: React.ReactText | undefined, extras: Extras) => void;
  selected?: React.ReactText;
}
