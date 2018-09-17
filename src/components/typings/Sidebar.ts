export interface SidebarProps {
  isOpen: boolean;
  width: number;
  children?: JSX.Element;
  onClose: () => void;
  closeOnOutsideClick?: boolean;
}
