export interface TimePickerProps {
  onHourChange: (value: number) => void;
  onMinuteChange: (value: number) => void;
  selectedHour?: number;
  selectedMinute?: number;
}
