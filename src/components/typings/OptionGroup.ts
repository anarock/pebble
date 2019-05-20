import * as React from "react";
import { SearchProps } from "./Search";
import { Omit } from "utility-types";

export interface CommonProps {
  className?: string;
  searchBox?: boolean;
  children?: React.ReactNode;
  searchBoxProps?: Omit<SearchProps, "type">;
}

export interface OptionGroupProps<OptionType> extends CommonProps {
  isSelected: (value: OptionType) => boolean;
  handleChange: (
    args: { value: OptionType; checked: boolean },
    e: React.SyntheticEvent | Event
  ) => void;
  multiSelect?: boolean;
}

export interface Extras {
  props: CommonProps;
  event: React.SyntheticEvent | Event;
}

export interface OptionGroupState {
  highlighted: number;
  isScrolled: boolean;
}
