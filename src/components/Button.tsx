import * as React from "react";
import { cx } from "emotion";
import {
  buttonStyle,
  iconStyle,
  getDynamicButtonStyle
} from "./styles/Button.styles";
import Ink from "react-ink";
import { ButtonProps } from "./typings/Button";
import Loader from "./Loader";
import { colors } from "../theme";

const Button: React.SFC<ButtonProps> = ({
  large,
  type = "primary",
  disabled,
  children,
  onClick,
  width,
  isOpen,
  showShadow,
  className,
  showRipple = true,
  isSelected,
  loading
}) => {
  const _className = cx(
    buttonStyle,
    getDynamicButtonStyle(large, type, showShadow),
    {
      _pebble_btn_disabled: disabled,
      _pebble_btn_link: type === "link",
      _pebble_btn_dropdown: type === "dropdown",
      _pebble_btn_dropdown_open: type === "dropdown" && isOpen,
      _pebble_btn_dropdown_selected: type === "dropdown" && isSelected,
      _pebble_btn_loading: loading
    }
  );

  const disableAction = disabled || loading;

  return (
    <button
      className={cx(_className, className)}
      onClick={!disableAction ? onClick : undefined}
      style={{ width }}
    >
      {loading ? <Loader color={colors.white.base} scale={0.4} /> : children}
      {type === "dropdown" && (
        <React.Fragment>
          {" "}
          <i
            className={cx("icon-arrow-down", iconStyle)}
            style={{
              transform: isOpen ? "rotate(180deg)" : "none"
            }}
          />
        </React.Fragment>
      )}
      {!disableAction && showRipple && type !== "link" && <Ink />}
    </button>
  );
};

export default Button;
