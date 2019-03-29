export type ToastType = "success" | "error";

export const ToastPosition = (function () {
  enum X {
    BOTTOM,
    BOTTOM_LEFT,
    BOTTOM_RIGHT,

    TOP,
    TOP_LEFT,
    TOP_RIGHT
  }
  return X;
})();

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
