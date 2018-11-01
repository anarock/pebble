import * as React from "react";
import { CheckboxGroupProps } from "./typings/CheckboxGroup";
import { CheckboxProps } from "./typings/Checkbox";
import { getSelectedCheckboxes } from "./utils/getSelectedCheckboxes";

export default class RadioGroup extends React.PureComponent<
  CheckboxGroupProps
> {
  private handleChange = (
    { value }: { value: React.ReactText },
    event: React.MouseEvent
  ) => {
    const { onChange, selected } = this.props;
    onChange(getSelectedCheckboxes(value, selected), event);
  };

  render() {
    const { children, selected, className, name, disabled } = this.props;

    const _children = React.Children.map(
      children,
      (checkbox: React.ReactElement<CheckboxProps>) =>
        React.cloneElement(checkbox, {
          onChange: this.handleChange,
          checked: selected.indexOf(checkbox.props.value) >= 0,
          disabled
        })
    );

    return (
      <div role="checkboxgroup" aria-label={name} className={className}>
        {_children}
      </div>
    );
  }
}
