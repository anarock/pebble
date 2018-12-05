import * as React from "react";
import Button from "./Button";
import { cx } from "emotion";
import {
  toggleWrap,
  offButton,
  selectedButton,
  onButton
} from "./styles/Toggle.style";
import { ToggleProps } from "./typings/Toggle";

const Toggle: React.SFC<ToggleProps> = props => {
  const { value, onButtonText, offButtonText, onChange } = props;
  return (
    <div className={toggleWrap}>
      <Button
        onClick={onChange}
        type="secondary"
        size="x-small"
        className={value === "OFF" ? cx(offButton, selectedButton) : offButton}
        showRipple={false}
      >
        {onButtonText}
      </Button>
      <Button
        onClick={onChange}
        type="secondary"
        size="x-small"
        className={value === "ON" ? cx(onButton, selectedButton) : onButton}
        showRipple={false}
      >
        {offButtonText}
      </Button>
    </div>
  );
};

export default Toggle;
