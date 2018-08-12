import * as React from "react";

type Value = string | number | (string | number)[];

export interface OptionGroupProps {
  onChange: (value: Value, props: OptionGroupProps) => void;
  selected?: Value;
  multi?: boolean;
  children: React.ReactNodeArray;
}

export interface OptionGroupState {
  selected: number;
}
