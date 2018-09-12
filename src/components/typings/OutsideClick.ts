export interface OutsideClickProps {
  onOutsideClick: () => void;
  children: JSX.Element;
  disabled?: boolean;
  className?: string;
}
