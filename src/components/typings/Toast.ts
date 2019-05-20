export type ToastType = "success" | "error";

export type ToastPosition =
  | "BOTTOM"
  | "BOTTOM_LEFT"
  | "BOTTOM_RIGHT"
  | "TOP"
  | "TOP_LEFT"
  | "TOP_RIGHT";

export interface ToastProps {
  className?: string;
  defaultTime?: number;
  defaultPosition?: ToastPosition;
}

export interface ToastState {
  type: ToastType;
  text: string;
  show: boolean;
  position: ToastPosition;
}
