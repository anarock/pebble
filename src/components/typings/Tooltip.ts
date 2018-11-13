import * as PopperJS from "popper.js";

export interface TooltipProps {
  text: string | JSX.Element;
  placement?: PopperJS.Placement;
  modifiers?: PopperJS.Modifiers;
  isOpen?: boolean;
  isError?: boolean;
  disabled?: boolean;
  // tslint:disable-next-line no-any
  label: (args: { ref: React.RefObject<any> }) => JSX.Element;
}

export interface TooltipState {
  isOpen: boolean;
}
