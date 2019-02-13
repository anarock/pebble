import * as React from "react";
import { CheckboxGroupProps } from "./typings/CheckboxGroup";
import { CheckboxProps } from "./typings/Checkbox";
import { getSelectedCheckboxes } from "./utils/getSelectedCheckboxes";

export default class CheckboxGroup<OptionType> extends React.PureComponent<
  CheckboxGroupProps<OptionType>
> {
  private handleChange = (
    { value }: { value: OptionType },
    event: React.MouseEvent
  ) => {
    const { onChange, selected } = this.props;
    onChange(getSelectedCheckboxes(value, selected), event);
  };

  render() {
    const { children, selected, className, name, disabled } = this.props;

    const _children = React.Children.map(children, _checkbox => {
      // `_checkbox as React.ReactElement<CheckboxProps>` is a hack
      // Because React does not allow us to specify what sort of elements
      // you can allow as children and leaves it on you to figure out
      // all various types of children provided.
      const checkbox = _checkbox as React.ReactElement<
        CheckboxProps<OptionType>
      >;
      return React.cloneElement(checkbox, {
        onChange: this.handleChange,
        checked: selected.indexOf(checkbox.props.value) >= 0,
        disabled
      });
    });

    return (
      <div role="checkboxgroup" aria-label={name} className={className}>
        {_children}
      </div>
    );
  }
}
