import { Interpolation } from "@emotion/css";

export interface OutsideClickProps {
  onOutsideClick: () => void;
  disabled?: boolean;
  styles?: Interpolation;
}
