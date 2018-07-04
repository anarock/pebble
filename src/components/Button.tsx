import * as React from "react";
import { cx } from "react-emotion";
import {
  Icon,
  buttonStyle,
  getDynamicButtonStyle
} from "@src/components/styles/Button.styles";

import Ink from "react-ink";
import { ButtonProps } from "@src/components/typings/Button";

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
  isSelected
}: any) => {
  const _className = cx(
    buttonStyle,
    getDynamicButtonStyle(large, type, showShadow),
    {
      __pebble__button__disabled: disabled,
      __pebble__button_link: type === "link",
      __pebble__button__dropdown: type === "dropdown",
      __pebble__button__dropdown__open: type === "dropdown" && isOpen,
      __pebble__button__dropdown__selected: type === "dropdown" && isSelected
    }
  );
  return (
    <button
      className={cx(_className, className)}
      onClick={!disabled ? onClick : undefined}
      style={{ width }}
    >
      {children}{" "}
      {type === "dropdown" && (
        <Icon isOpen={isOpen} className="icon-arrow-down" />
      )}
      {!disabled && showRipple && type !== "link" && <Ink />}
    </button>
  );
};

export default Button;
