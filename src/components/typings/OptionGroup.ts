import * as React from "react";
import { SearchProps } from "./Search";
import { Omit } from "utility-types";

export interface OptionGroupProps {
  className?: string;
  searchBox?: boolean;
  searchBoxProps?: Omit<SearchProps, "type">;
  isSelected: (value: React.ReactText) => boolean;
  handleChange: (
    args: { value: React.ReactText; checked: boolean },
    e: React.SyntheticEvent | Event
  ) => void;
  multiSelect?: boolean;
}

export type CommonProps = Omit<
  OptionGroupProps,
  "multiSelect" | "isSelected" | "handleChange"
>;

export interface Extras {
  props: CommonProps;
  event: React.SyntheticEvent | Event;
}

export interface OptionGroupState {
  selected: number;
  isScrolled: boolean;
}
