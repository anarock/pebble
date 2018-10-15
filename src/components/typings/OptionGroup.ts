import * as React from "react";

export interface OptionGroupProps_ {
  children: React.ReactNodeArray;
  className?: string;
  searchBox?: boolean;
  onSearchBoxQueryChange?: (query: string) => void;
  searchBoxPlaceholder?: string;
  isSelected: (value: React.ReactText) => boolean;
  handleChange: (args: { value: React.ReactText; checked: boolean }) => void;
  multiSelect?: boolean;
  isSearchBoxClearable?: boolean;
  onSearchBoxClear?: () => void;
}

export interface OptionGroupState_ {
  selected: number;
  isScrolled: boolean;
}
