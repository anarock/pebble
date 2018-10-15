import * as React from "react";
import { SearchProps } from "./Search";

export interface OptionGroupProps_ {
  children: React.ReactNodeArray;
  className?: string;
  searchBox?: boolean;
  searchBoxProps?: Partial<SearchProps>;
  isSelected: (value: React.ReactText) => boolean;
  handleChange: (args: { value: React.ReactText; checked: boolean }) => void;
  multiSelect?: boolean;
}

export interface OptionGroupState_ {
  selected: number;
  isScrolled: boolean;
}
