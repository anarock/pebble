import * as React from "react";

import {
  iconStyle,
  getButtonStyle,
  dropDownButtonStyle,
  dropDownButtonDefaultStyle
} from "./styles/Button.styles";
import Ink from "react-ink";
import { ButtonProps, DropDownButtonProps } from "./typings/Button";
import Loader from "./Loader";
import { colors } from "pebble-shared";

const Button: React.FunctionComponent<ButtonProps> = ({
  type = "primary",
  disabled,
  children,
  onClick,
  width,
  showShadow,
  styles,
  showRipple = true,
  loading,
  size = "small",
  buttonProps
}: ButtonProps) => {
  const disableAction = disabled || loading;

  const filled = size !== "x-small";

  return (
    <button
      css={[getButtonStyle(size, type, !!showShadow, filled), styles]}
      onClick={!disableAction ? onClick : undefined}
      style={{ width }}
      disabled={disabled}
      {...buttonProps}
    >
      {loading ? <Loader color={colors.white.base} scale={0.4} /> : children}
      {!disableAction && showRipple && type !== "link" && <Ink />}
    </button>
  );
};

export const DropDownButton = ({
  isOpen,
  isSelected,
  children,
  styles,
  ...props
}: DropDownButtonProps) => {
  return (
    <Button
      {...props}
      type="secondary"
      styles={[
        dropDownButtonStyle,
        !(isOpen || isSelected) && dropDownButtonDefaultStyle,
        styles
      ]}
    >
      {children}{" "}
      <i
        className="pi pi-arrow-drop-down"
        css={iconStyle}
        style={{
          transform: isOpen ? "rotate(180deg)" : "none"
        }}
      />
    </Button>
  );
};

export default Button;
