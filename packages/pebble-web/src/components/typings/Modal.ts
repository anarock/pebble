import { Interpolation } from "@emotion/css";

export interface ModalProps {
  visible: boolean;
  backDropStyles?: Interpolation;
  modalStyles?: Interpolation;
  children: React.ReactNode;
}
