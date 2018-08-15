import * as React from "react";
import { Subtract } from "utility-types";
import { OptionGroupProps_ } from "./OptionGroup";

interface _Subtract {
  multiSelect?: boolean;
  isSelected: (value: React.ReactText) => boolean;
  handleChange: (args: { value: React.ReactText; checked: boolean }) => void;
}

type CommonProps = Subtract<OptionGroupProps_, _Subtract>;

export interface OptionGroupRadio extends CommonProps {
  onChange: (value: React.ReactText, props: OptionGroupRadio) => void;
  selected?: React.ReactText;
}
