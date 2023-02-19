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
  placement?: Placement;
  wrapperClassName?: string;
  dropDownWrapperClassName?:string
}

export interface DateInputState {
  stringInput: string;
  propsValue?: number | Date;
}
