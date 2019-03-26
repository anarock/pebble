export type ToastType = "success" | "error";

export const enum ToastPosition {
  bottom = "bottom",
  right = "right"
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
