import { CalendarProps as CP } from "react-calendar";

interface TileDot {
  timeStamp?: number | Date;
  colors?: string[];
}

export type CalendarValue = Date[] | Date;

export interface CalendarProps extends CP {
  onChange: (value: CalendarValue) => void;
  range?: boolean;
  selected?: CalendarValue;
  hideShadow?: boolean;
  className?: string;
  onClear?: () => void;
  onApply?: (value?: CalendarValue) => void;
  tileDots: TileDot[];
  disabledDays?: Array<number | Date>;
}

export interface CalendarState {
  value?: CalendarValue;
  singleSelectedDate?: Date[] | null;
}
