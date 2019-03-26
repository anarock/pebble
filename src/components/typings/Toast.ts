export type ToastType = "success" | "error";

export type ToastPosition = "bottom" | "right";

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
