import * as React from "react";
import OptionGroup from "./shared/OptionGroup";
import { OptionGroupRadio as OptionGroupRadioProps } from "./typings/OptionGroupRadio";

export default class OptionGroupRadio<OptionType> extends React.PureComponent<
  OptionGroupRadioProps<OptionType>
> {
  isSelected = (value: OptionType) => {
    return this.props.selected === value;
  };
  handleChange: OptionGroup<OptionType>["props"]["handleChange"] = (
    { value, checked },
    event
  ) => {
    const { onChange } = this.props;
    onChange(checked ? value : undefined, {
      props: this.props,
      event
    });
  };
  render() {
    const { selected, onChange, isSelected, ...rest } = this.props;
    return (
      <OptionGroup<OptionType>
        {...rest}
        isSelected={isSelected || this.isSelected}
        handleChange={this.handleChange}
      />
    );
  }
}
