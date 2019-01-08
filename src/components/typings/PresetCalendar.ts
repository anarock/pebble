import { CalendarValue, CalendarProps } from "./Calendar";

export interface PresetDates {
  label: string;
  dateRange: () => CalendarValue;
}

export interface PresetCalendarProps extends CalendarProps {
  presetDateOptions: PresetDates[];
  customDateInputLabel: (
    args: { toggle: () => void; isOpen: boolean }
  ) => JSX.Element;
  onApply: (value?: CalendarValue) => void;
  isOpen: boolean;
}

export interface PresetCalendarState {
  isCustomSelected: boolean;
}
