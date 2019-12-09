import { CalendarProps as CP } from "react-calendar";
import { Omit } from "utility-types";
import { Interpolation } from "@emotion/css";

interface TileDot {
  timeStamp?: number | Date;
  colors?: string[];
}

interface CommonCalendarProps extends Omit<CP, "onChange"> {
  hideShadow?: boolean;
  styles?: Interpolation;
  onClear?: () => void;
  tileDots: TileDot[];
  disabledDays?: Array<number | Date>;
}

export interface DateSingle extends CommonCalendarProps {
  range?: false;
  selected?: Date;
  onChange: (value: Date) => void;
  onApply?: (value?: Date) => void;
}

export interface DateRange extends CommonCalendarProps {
  range: true;
  selected?: [Date, Date];
  onChange: (value: [Date, Date]) => void;
  onApply?: (value?: [Date, Date]) => void;
}

export type CalendarProps = DateSingle | DateRange;

export interface CalendarState {
  value?: [Date, Date] | Date;
  singleSelectedDate?: [Date, Date] | null;
}
