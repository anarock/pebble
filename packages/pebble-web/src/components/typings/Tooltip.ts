import * as PopperJS from "popper.js";

export interface TooltipProps {
  text: React.ReactNode;
  placement?: PopperJS.Placement;
  modifiers?: PopperJS.Modifiers;
  isOpen?: boolean;
  isError?: boolean;
  disabled?: boolean;
  label: (args: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  }) => React.ReactNode;
  renderElement?: (args: {
    toggle: () => void;
    isOpen: boolean;
  }) => React.ReactNode;
  toolTipClassName?: string;
}

export interface TooltipState {
  isOpen: boolean;
}
