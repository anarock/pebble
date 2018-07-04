export type ToastType = "success" | "error";

export interface ToastState {
  type: string;
  text: string;
  show: boolean;
}
