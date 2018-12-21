export type ToastType = "success" | "error";

export interface ToastProps {
  className?: string;
  time?: number;
}

export interface ToastState {
  type: ToastType;
  text: string;
  show: boolean;
  time?: number;
}
