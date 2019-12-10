import { Interpolation } from "./emotionCustom";

export interface SwitchProps {
  initialValue?: boolean;
  onChange?: (value: boolean) => void;
  styles?: Interpolation;
  label?: string;
  disabled?: boolean;
}

export interface SwitchState {
  value: boolean;
}
