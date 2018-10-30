import * as React from "react";
import { SearchProps } from "./Search";
import { Omit } from "utility-types";

export interface OptionGroupProps_ {
  className?: string;
  searchBox?: boolean;
  searchBoxProps?: Partial<SearchProps>;
  isSelected: (value: React.ReactText) => boolean;
  handleChange: (
    args: { value: React.ReactText; checked: boolean },
    e: React.SyntheticEvent | Event
  ) => void;
  multiSelect?: boolean;
}

export type CommonProps = Omit<
  OptionGroupProps_,
  "multiSelect" | "isSelected" | "handleChange"
>;
export type Extras = {
  props: CommonProps;
  event: React.SyntheticEvent | Event;
};

export interface OptionGroupState_ {
  selected: number;
  isScrolled: boolean;
}
