import * as PopperJS from "popper.js";

export interface TooltipProps {
  text: string | JSX.Element;
  placement?: PopperJS.Placement;
  label: (args: { ref: React.RefObject<any> }) => JSX.Element;
  modifiers?: PopperJS.Modifiers;
  isOpen?: boolean;
}

export interface TooltipState {
  isOpen: boolean;
}
