export type ToastType = "success" | "error";

export enum ToastPosition {
  BOTTOM = "BOTTOM",
  BOTTOM_LEFT = "BOTTOM_LEFT",
  BOTTOM_RIGHT = "BOTTOM_RIGHT",

  TOP = "TOP",
  TOP_LEFT = "TOP_LEFT",
  TOP_RIGHT = "TOP_RIGHT"
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
