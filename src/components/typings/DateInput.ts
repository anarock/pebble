import { CalendarProps } from "./Calendar";
import { SimpleInputProps } from "./Input";
import { Omit } from "utility-types";

export interface DateInputProps {
  onChange: (date?: number) => void;
  value?: number | Date;
  placeholder: string;
  inputProps?: Omit<SimpleInputProps, "value" | "onChange" | "placeholder">;
  calendarProps?: CalendarProps;
  useBrowserControls?: boolean;
}
