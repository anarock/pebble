import { SimpleInputProps } from "./Input";
import { Omit } from "utility-types";
import { DateSingle } from "./Calendar";
import { Placement } from "popper.js";

export interface DateInputProps {
  onChange: (date?: number) => void;
  value?: number | Date;
  placeholder: string;
  inputProps?: Omit<SimpleInputProps, "value" | "onChange" | "placeholder">;
  calendarProps?: DateSingle;
  disabled?: boolean;
  errorMessage?: string;
  placement?: Placement;
  wrapperClassName?: string;
  dropDownClassName?: string;
  initiallyOpen?: boolean;
  onOutsideClick?: (isOpen: boolean) => void;
  controlled?: boolean;
  isOpen?: boolean;
  dataTestId?: string;
}

export interface DateInputState {
  stringInput: string;
  propsValue?: number | Date;
}
