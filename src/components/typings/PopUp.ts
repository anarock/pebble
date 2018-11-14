export interface PopUpProps {
  visible: boolean;
  children: JSX.Element | string;
  onApprove?: () => void;
  onClose?: () => void;
  approveButtonText?: string;
  closeButtonText?: string;
}
