export interface PopUpProps {
  visible: boolean;
  onApprove?: () => void;
  onReject?: () => void;
  onClose?: () => void;
  approveButtonText?: string;
  rejectButtonText?: string;
}
