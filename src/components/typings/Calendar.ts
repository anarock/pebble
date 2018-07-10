interface TileDot {
  timeStamp?: number | Date;
  colors?: string[];
}

export interface CalendarProps {
  onChange?: (date: Date) => void;
  range?: boolean;
  selected?: Date[] | Date;
  hideShadow?: boolean;
  className?: string;
  onClear?: () => void;
  onApply?: (value: any) => void;
  tileDots?: TileDot[];
  disabledDays?: (number | Date)[];
  disableFuture?: boolean;
  disablePast?: boolean;
}

export interface CalendarState {
  value: Date[] | Date;
}
