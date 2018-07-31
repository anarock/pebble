import { CalendarProps as CP } from "react-calendar";

interface TileDot {
  timeStamp?: number | Date;
  colors?: string[];
}

export interface CalendarProps extends CP {
  onChange?: (date: Date) => void;
  range?: boolean;
  selected?: Date[] | Date;
  hideShadow?: boolean;
  className?: string;
  onClear?: () => void;
  onApply?: (value: any) => void;
  tileDots?: TileDot[];
  disabledDays?: (number | Date)[];
}

export interface CalendarState {
  value: Date[] | Date;
}
