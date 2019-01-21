import * as React from "react";
import OptionGroup from "./shared/OptionGroup";
import { OptionGroupRadio as OptionGroupRadioProps } from "./typings/OptionGroupRadio";

function OptionGroupRadio<OptionType = string | number>(
  props: OptionGroupRadioProps<OptionType>
) {
  const { selected, onChange, ...rest } = props;
  return (
    <OptionGroup<OptionType>
      {...rest}
      isSelected={value => {
        return selected === value;
      }}
      handleChange={({ value, checked }, event) => {
        onChange(checked ? value : undefined, {
          props,
          event
        });
      }}
    />
  );
}

export default OptionGroupRadio;
