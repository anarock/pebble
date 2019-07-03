import { SimpleInputProps } from "./Input";
import { Omit } from "utility-types";
import { DateSingle } from "./Calendar";

export interface DateInputProps {
  onChange: (date?: number) => void;
  value?: number | Date;
  placeholder: string;
  inputProps?: Omit<SimpleInputProps, "value" | "onChange" | "placeholder">;
  calendarProps?: DateSingle;
}

export interface DateInputState {
  stringInput: string;
  propsValue?: number | Date;
}
