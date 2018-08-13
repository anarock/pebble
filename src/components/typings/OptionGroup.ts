import * as React from "react";

type Value = string | number | (string | number)[];

export interface OptionGroupProps {
  onChange: (value: Value, props: OptionGroupProps) => void;
  selected?: Value;
  multiSelect?: boolean;
  children: React.ReactNodeArray;
  className?: string;
}

export interface OptionGroupState {
  selected: number;
}
