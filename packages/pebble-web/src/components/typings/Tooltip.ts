import * as PopperJS from "popper.js";

export interface TooltipProps<T extends HTMLElement> {
  text: React.ReactNode;
  placement?: PopperJS.Placement;
  modifiers?: PopperJS.Modifiers;
  isOpen?: boolean;
  isError?: boolean;
  disabled?: boolean;
  label: (args: { ref: React.RefObject<T> }) => React.ReactNode;
  renderElement?: (args: {
    toggle: () => void;
    isOpen: boolean;
  }) => React.ReactNode;
}

export interface TooltipState {
  isOpen: boolean;
}
