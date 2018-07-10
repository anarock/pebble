export interface CalendarProps {
  onChange?: (date: Date) => void;
  range?: boolean;
  selected?: Date[] | Date;
  hideShadow?: boolean;
  className?: string;
  onClear?: () => void;
  onApply?: (value: any) => void;
}
