import * as React from "react";

export interface RadioGroupProps<OptionType> {
  selected: OptionType;
  onChange: (value: OptionType | undefined, event: React.MouseEvent) => void;
  toggle?: boolean;
  className?: string;
  name: string;
  disabled?: boolean;
}
