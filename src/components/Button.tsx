import * as React from "react";
import { css, cx } from "emotion";
import { iconStyle, getButtonStyle } from "./styles/Button.styles";
import Ink from "react-ink";
import { ButtonProps, DropDownButtonProps } from "./typings/Button";
import Loader from "./Loader";
import { colors, constants } from "../theme";

const Button: React.SFC<ButtonProps> = ({
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
}) => {
  const disableAction = disabled || loading;

  return (
    <button
      className={cx(getButtonStyle(size, type, showShadow), className)}
      onClick={!disableAction ? onClick : undefined}
      style={{ width }}
      disabled={disabled}
    >
      {loading ? <Loader color={colors.white.base} scale={0.4} /> : children}
      {!disableAction && showRipple && type !== "link" && <Ink />}
    </button>
  );
};

export const DropDownButton: React.SFC<DropDownButtonProps> = ({
  isOpen,
  isSelected,
  children,
  ...props
}) => {
  const className = cx(
    css({
      border: constants.border.base
    }),
    {
      [css({
        backgroundColor: colors.white.base,
        color: colors.gray.darker
      })]: !(isOpen || isSelected)
    }
  );

  return (
    <Button {...props} type="secondary" className={className}>
      <React.Fragment>
        {children}{" "}
        <i
          className={cx("icon-arrow-down", iconStyle)}
          style={{
            transform: isOpen ? "rotate(180deg)" : "none"
          }}
        />
      </React.Fragment>
    </Button>
  );
};

export default Button;
