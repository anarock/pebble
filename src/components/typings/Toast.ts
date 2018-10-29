export type ToastType = "success" | "error";

export interface ToastState {
  type: ToastType;
  text: string;
  show: boolean;
}
