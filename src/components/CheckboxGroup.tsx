import * as React from "react";
import { CheckboxGroupProps } from "./typings/CheckboxGroup";
import { CheckboxProps } from "./typings/Checkbox";

export default class RadioGroup extends React.PureComponent<
  CheckboxGroupProps
> {
  private handleChange = ({ value }) => {
    const { onChange, selected } = this.props;
    const _selected = selected || [];

    const cloned = _selected.slice(0);
    const index = _selected.findIndex(datum => datum === value);
    if (index >= 0) {
      cloned.splice(index, 1);
    } else {
      cloned.push(value);
    }

    onChange(cloned, this.props);
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
