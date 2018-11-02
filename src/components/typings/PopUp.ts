export interface PopUpProps {
  visible: boolean;
  headingText: string;
  onApprove?: () => void;
  onClose?: () => void;
  approveButtonText?: string;
  closeButtonText?: string;
}
