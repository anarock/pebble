import * as React from "react";
import { controlStyle, radioIconStyle } from "../styles/Control.styles";
import { ControlProps } from "../typings/Control";
import { cx } from "emotion";
import { colors } from "pebble-shared";

function Control<OptionType>(props: ControlProps<OptionType>) {
  const {
    checked,
    onChange,
    value,
    disabled,
    children = ControlView,
    type,
    className
  } = props;
  return (
    <div
      className={cx(controlStyle, className)}
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
  iconClassName?: string;
  indeterminate?: boolean;
}

export const ControlView = ({
  checked,
  label,
  type,
  disabled,
  iconClassName,
  indeterminate
}: ControlViewProps) => {
  const isRadio = type === "radio";

  const wrapClass = cx(radioIconStyle, iconClassName);
  const iconClass = cx("pi", {
    "pi-radio": !!isRadio && !checked,
    "pi-radio-selected": !!isRadio && !!checked,
    "pi-checkbox-selected": !indeterminate && !isRadio && !!checked,
    "pi-checkbox-unselected": !indeterminate && !isRadio && !checked,
    "pi-checkbox-indeterminate": !!indeterminate && !isRadio
  });

  const getColor = () => {
    if (disabled) {
      return colors.gray.base;
    }
    if (checked || indeterminate) {
      return colors.violet.base;
    }
    return colors.gray.light;
  };

  return (
    <>
      <div className={wrapClass}>
        <i style={{ color: getColor() }} className={iconClass} />
      </div>{" "}
      {label}
    </>
  );
};

export default Control;
