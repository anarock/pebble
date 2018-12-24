import * as React from "react";
import { RadioProps } from "./typings/Radio";
import { RadioGroupProps } from "./typings/RadioGroup";

export default class RadioGroup extends React.PureComponent<RadioGroupProps> {
  private handleChange = (
    {
      value,
      checked
    }: { value: RadioGroupProps["selected"]; checked: boolean },
    event: React.MouseEvent
  ) => {
    const { toggle, selected, onChange } = this.props;
    if (!toggle && value === selected) return;
    onChange(checked ? value : undefined, event);
  };

  render() {
    const { children, selected, className, name, disabled } = this.props;

    const _children = React.Children.map(children, _radio => {
      // `_radio as React.ReactElement<RadioProps>` is a hack
      // Because React does not allow us to specify what sort of elements
      // you can allow as children and leaves it on you to figure out
      // all various types of children provided.
      const radio = _radio as React.ReactElement<RadioProps>;
      return React.cloneElement(radio, {
        onChange: this.handleChange,
        checked: selected === radio.props.value,
        disabled
      });
    });

    return (
      <div role="radiogroup" aria-label={name} className={className}>
        {_children}
      </div>
    );
  }
}
