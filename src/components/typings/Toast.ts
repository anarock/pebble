export type ToastType = "success" | "error";

export enum ToastPosition {
  BOTTOM = "BOTTOM",
  RIGHT = "RIGHT"
}

export interface ToastProps {
  className?: string;
  defaultTime?: number;
}

export interface ToastState {
  type: ToastType;
  text: string;
  show: boolean;
  position: ToastPosition;
}
