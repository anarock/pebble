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
  outline,
  size = "small",
  buttonProps,
  testId
}: ButtonProps) => {
  const disableAction = disabled || loading;

  const _className = cx(
    getButtonStyle(size, type, !!showShadow, !!outline),
    className
  );

  return (
    <button
      className={_className}
      onClick={!disableAction ? onClick : undefined}
      style={{ width }}
      disabled={disabled}
      data-testid={testId}
      {...buttonProps}
    >
      {loading ? <Loader color="currentColor" scale={0.4} /> : children}
      {!disableAction && showRipple && type !== "link" && <Ink />}
    </button>
  );
};

export const DropDownButton = ({
  isOpen,
  isSelected,
  children,
  className,
  ...props
}: DropDownButtonProps) => {
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
