import * as React from "react";
import { RadioProps } from "./typings/Radio";
import { RadioGroupProps } from "./typings/RadioGroup";
import {
  getOptionTestId,
  getRadioGroupTestIds,
  getTestIds
} from "../utils/dataTestIds";

export default class RadioGroup<OptionType> extends React.PureComponent<
  RadioGroupProps<OptionType>
> {
  private handleChange = (
    { value, checked }: { value: OptionType; checked: boolean },
    event: React.MouseEvent
  ) => {
    const { toggle, selected, onChange } = this.props;
    if (!toggle && value === selected) return;
    onChange(checked ? value : undefined, event);
  };

  render() {
    const {
      children,
      selected,
      className,
      name,
      disabled,
      dataTestId
    } = this.props;

    const dataTestIds = getTestIds(dataTestId, getRadioGroupTestIds);

    const _children = React.Children.map(children, (_radio, i) => {
      // `_radio as React.ReactElement<RadioProps>` is a hack
      // Because React does not allow us to specify what sort of elements
      // you can allow as children and leaves it on you to figure out
      // all various types of children provided.
      const radio = _radio as React.ReactElement<RadioProps<OptionType>>;
      return React.cloneElement(radio, {
        onChange: this.handleChange,
        checked: selected === radio.props.value,
        disabled,
        dataTestId: dataTestIds.option
          ? getOptionTestId(dataTestIds.option, i)
          : undefined
      });
    });

    return (
      <div role="radiogroup" aria-label={name} className={className}>
        {_children}
      </div>
    );
  }
}
