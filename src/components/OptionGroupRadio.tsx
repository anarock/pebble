import * as React from "react";
import OptionGroup from "./shared/OptionGroup";
import { OptionGroupRadio as OptionGroupRadioProps } from "./typings/OptionGroupRadio";

const OptionGroupRadio: React.SFC<OptionGroupRadioProps> = props => {
  const { selected, onChange, ...rest } = props;
  return (
    <OptionGroup
      {...rest}
      isSelected={value => {
        return selected === value;
      }}
      handleChange={({ value, checked }, event) => {
        onChange(checked ? value : undefined, {
          props,
          event: event
        });
      }}
    />
  );
};

export default OptionGroupRadio;
