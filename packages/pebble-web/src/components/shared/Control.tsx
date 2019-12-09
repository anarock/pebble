import * as React from "react";
import { controlStyle, radioIconStyle } from "../styles/Control.styles";
import { ControlProps } from "../typings/Control";

import { colors } from "pebble-shared";

function Control<OptionType>(props: ControlProps<OptionType>) {
  const {
    checked,
    onChange,
    value,
    disabled,
    children = ControlView,
    type,
    styles
  } = props;
  return (
    <div
      css={[controlStyle, styles]}
      role={type}
      aria-disabled={disabled}
      aria-checked={checked}
      data-disabled={disabled}
      tabIndex={checked ? 0 : -1}
      onClick={
        !disabled
          ? (e: React.MouseEvent) =>
              onChange && onChange({ value, checked: !checked }, e)
          : undefined
      }
    >
      {children(props)}
    </div>
  );
}

interface ControlViewProps {
  label: React.ReactNode;
  checked?: boolean;
  type: "radio" | "checkbox";
  disabled?: boolean;
}

export const ControlView = ({
  checked,
  label,
  type,
  disabled
}: ControlViewProps) => {
  const isRadio = type === "radio";

  // Ensure that other styles are not emotion styles.
  // As cx merges styles into one className.
  const iconClass = [
    "pi",
    !!isRadio && !checked && "pi-radio",
    !!isRadio && !!checked && "pi-radio-selected",
    !isRadio && !!checked && "pi-checkbox-selected",
    !isRadio && !checked && "pi-checkbox-unselected"
  ]
    .filter(Boolean)
    .join(" ");

  const getColor = () => {
    if (disabled) {
      return colors.gray.base;
    }
    if (checked) {
      return colors.violet.base;
    }
    return colors.gray.light;
  };

  return (
    <>
      <i
        style={{
          color: getColor(),
          paddingTop: 2
        }}
        className={iconClass}
        css={radioIconStyle}
      />{" "}
      {label}
    </>
  );
};

export default Control;
