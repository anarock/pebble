import * as React from "react";

export interface CheckboxGroupProps<OptionType> {
  selected: OptionType[];
  onChange: (value: OptionType[], e: React.MouseEvent) => void;
  className?: string;
  name: string;
  disabled?: boolean;
}
