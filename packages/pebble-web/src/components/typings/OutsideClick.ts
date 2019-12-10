import { Interpolation } from "./emotionCustom";

export interface OutsideClickProps {
  onOutsideClick: () => void;
  disabled?: boolean;
  styles?: Interpolation;
}
