import { DateRange } from "./Calendar";

export interface PresetDates {
  label: string;
  dateRange: () => Date[];
}

export type PresetCalendarProps = DateRange & {
  presetDateOptions: PresetDates[];
  customDateInputLabel: (
    args: { toggle: () => void; isOpen: boolean }
  ) => JSX.Element;
  onApply: (value?: Date[]) => void;
  isOpen: boolean;
};

export interface PresetCalendarState {
  isCustomSelected: boolean;
}
