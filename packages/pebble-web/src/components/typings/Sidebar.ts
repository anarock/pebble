export interface SidebarProps {
  isOpen: boolean;
  width: number;
  onClose: () => void;
  closeOnOutsideClick?: boolean;
}
