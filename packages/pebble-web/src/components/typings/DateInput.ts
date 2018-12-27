import { CalendarProps } from "./Calendar";

export interface DateInputProps {
  onChange: (date?: number) => void;
  value?: number | Date;
  placeholder: string;
  calendarProps?: CalendarProps;
}
