export type ToastType = "success" | "error";

export enum ToastPosition {
  TOP_LEFT,
  TOP_CENTER,
  TOP_RIGHT,

  BOTTOM_LEFT,
  BOTTOM_CENTER,
  BOTTOM_RIGHT
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
