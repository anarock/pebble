export interface OutsideClickProps {
  onOutsideClick: () => void;
  children: JSX.Element[] | JSX.Element;
  disabled?: boolean;
  className?: string;
}
