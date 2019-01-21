import { DateSingle } from "./Calendar";

export interface DateInputProps {
  onChange: (date?: number) => void;
  value?: number | Date;
  placeholder: string;
  calendarProps?: DateSingle;
}
