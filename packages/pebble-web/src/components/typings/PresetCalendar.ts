import { DateRange } from "./Calendar";

export interface PresetDates {
  label: string;
  dateRange: [Date | undefined, Date | undefined];
}

export type PresetCalendarProps = Omit<DateRange, "range" | "tileDots"> & {
  defaultValue?: [Date | undefined, Date | undefined];
  presetDateOptions: PresetDates[];
  onApply: (value?: [Date, Date]) => void;
  isOpen: boolean;
};

export interface PresetCalendarState {
  startTime?: Date;
  endTime?: Date;
}
