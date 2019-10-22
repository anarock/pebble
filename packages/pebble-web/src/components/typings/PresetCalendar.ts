import { DateRange } from "./Calendar";

export interface PresetDates {
  label: string;
  dateRange: [Date | undefined, Date | undefined];
}

export type PresetCalendarProps = DateRange & {
  initialValue?: [Date | undefined, Date | undefined];
  presetDateOptions: PresetDates[];
  onApply: (value?: [Date, Date]) => void;
  isOpen: boolean;
};

export interface PresetCalendarState {
  startTime?: number;
  endTime?: number;
}
