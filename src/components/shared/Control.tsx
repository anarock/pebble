import * as React from "react";
import { controlContentStyle, controlStyle } from "../styles/Control.styles";
import { ControlProps } from "../typings/Control";
import { colors } from "../../theme";
import { cx } from "emotion";

const Control: React.SFC<ControlProps> = props => {
  const { checked, onChange, value, disabled, children, type } = props;
  return (
    <div
      className={controlStyle}
      role={type}
      aria-disabled={disabled}
      aria-checked={checked}
      data-disabled={disabled}
      tabIndex={checked ? 0 : -1}
      onClick={
        !disabled ? () => onChange({ value, checked: !checked }) : undefined
      }
    >
      {children(props)}
    </div>
  );
};

export const ControlView: React.SFC<ControlProps> = ({
  checked,
  label,
  type
}) => {
  const isRadio = type === "radio";

  const iconClass = cx({
    "icon-radio": isRadio && !checked,
    "icon-radio-selected": isRadio && checked,
    "icon-checkbox-selected": !isRadio && checked,
    "icon-checkbox-unselected": !isRadio && !checked
  });

  return (
    <div className={controlContentStyle}>
      <i
        style={{
          color: checked ? colors.violet.base : colors.gray.light,
          paddingTop: 2
        }}
        className={iconClass}
      />{" "}
      {label}
    </div>
  );
};

Control.defaultProps = {
  children: props => <ControlView {...props} />
};

export default Control;
