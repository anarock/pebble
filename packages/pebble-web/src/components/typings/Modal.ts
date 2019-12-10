import { Interpolation } from "./emotionCustom";

export interface ModalProps {
  visible: boolean;
  backDropStyles?: Interpolation;
  modalStyles?: Interpolation;
  children: React.ReactNode;
}
