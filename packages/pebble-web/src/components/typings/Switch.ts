export interface SwitchProps {
  initialValue?: boolean;
  onChange?: (value: boolean) => void;
  className?: string;
  label?: string;
  disabled?: boolean;
}

export interface SwitchState {
  value: boolean;
}
