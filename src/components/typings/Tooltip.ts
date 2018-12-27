import * as PopperJS from "popper.js";

export interface TooltipProps {
  text: React.ReactNode;
  placement?: PopperJS.Placement;
  modifiers?: PopperJS.Modifiers;
  isOpen?: boolean;
  isError?: boolean;
  disabled?: boolean;
  // tslint:disable-next-line no-any
  label: (args: { ref: React.RefObject<any> }) => React.ReactNode;
}

export interface TooltipState {
  isOpen: boolean;
}
