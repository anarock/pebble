import * as React from "react";
import { radioContentStyle, radioStyle } from "./styles/Radio.styles";
import { RadioProps } from "./typings/Radio";
import { colors } from "../theme";

const Radio: React.SFC<RadioProps> = props => {
  const { checked, onChange, value, disabled, children } = props;
  return (
    <div
      className={radioStyle}
      role="radio"
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

Radio.defaultProps = {
  children: ({ checked, label }: RadioProps) => (
    <div className={radioContentStyle}>
      <i
        style={{
          color: checked ? colors.violet.base : colors.gray.light,
          paddingTop: 2
        }}
        className={checked ? "icon-radio-selected" : "icon-radio"}
      />{" "}
      {label}
    </div>
  )
};

export default Radio;
