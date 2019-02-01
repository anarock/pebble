import * as React from "react";
import { cx } from "emotion";
import {
  iconStyle,
  getButtonStyle,
  dropDownButtonStyle,
  dropDownButtonDefaultStyle
} from "./styles/Button.styles";
import Ink from "react-ink";
import { ButtonProps, DropDownButtonProps } from "./typings/Button";
import Loader from "./Loader";
import { colors } from "../theme";

const Button: React.FunctionComponent<ButtonProps> = ({
  type = "primary",
  disabled,
  children,
  onClick,
  width,
  showShadow,
  className,
  showRipple = true,
  loading,
  size = "small"
}: ButtonProps) => {
  const disableAction = disabled || loading;

  const filled = size !== "x-small";
  const _className = cx(
    getButtonStyle(size, type, !!showShadow, filled),
    className
  );

  return (
    <button
      className={_className}
      onClick={!disableAction ? onClick : undefined}
      style={{ width }}
      disabled={disabled}
    >
      {loading ? <Loader color={colors.white.base} scale={0.4} /> : children}
      {!disableAction && showRipple && type !== "link" && <Ink />}
    </button>
  );
};

export const DropDownButton: React.FunctionComponent<DropDownButtonProps> = ({
  isOpen,
  isSelected,
  children,
  className,
  ...props
}) => {
  const _className = cx(dropDownButtonStyle, {
    [dropDownButtonDefaultStyle]: !(isOpen || isSelected)
  });

  return (
    <Button {...props} type="secondary" className={cx(_className, className)}>
      <React.Fragment>
        {children}{" "}
        <i
          className={cx("pi pi-arrow-drop-down", iconStyle)}
          style={{
            transform: isOpen ? "rotate(180deg)" : "none"
          }}
        />
      </React.Fragment>
    </Button>
  );
};

export default Button;
