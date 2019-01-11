export interface ModalProps {
  visible: boolean;
  className?: string;
  children: React.ReactNode;
  align?: "absoluteCenter" | "flexCenter";
}
