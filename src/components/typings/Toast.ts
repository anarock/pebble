export type ToastType = "success" | "error";

export interface ToastProps {
  className?: string;
}

export interface ToastState {
  type: ToastType;
  text: string;
  show: boolean;
}
