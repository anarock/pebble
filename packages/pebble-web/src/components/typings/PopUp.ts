import { ButtonProps } from "./Button";

export interface PopUpProps {
  visible: boolean;
  onApprove?: () => void;
  onReject?: () => void;
  onClose?: () => void;
  approveButtonText?: string | Element;
  rejectButtonText?: string | Element;
  approveButtonProps?: Omit<ButtonProps, "children" | "onClick">;
  rejectButtonProps?: Omit<ButtonProps, "children" | "onClick">;
}
