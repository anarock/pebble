import { CalendarValue, CalendarProps } from "./Calendar";

export interface PresetDates {
  label: string;
  dateRange: () => CalendarValue;
}

export interface PresetCalendarProps {
  presetDateOptions: PresetDates[];
  customDateInputLabel: (
    args: { toggle: () => void; isOpen: boolean }
  ) => JSX.Element;
  onApply: (value?: CalendarValue) => void;
  calendarProps: CalendarProps;
}

export interface PresetCalendarState {
  isCustomSelected: boolean;
}
