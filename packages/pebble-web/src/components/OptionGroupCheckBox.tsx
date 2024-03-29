import { cx } from "emotion";
import * as React from "react";
import { getSelectedCheckboxes } from "./utils/getSelectedCheckboxes";
import Button from "./Button";
import OptionGroup from "./shared/OptionGroup";
import { OptionGroupCheckBoxProps } from "./typings/OptionGroupCheckBox";
import * as styles from "../components/styles/OptionGroupCheckBox.styles";
import { OptionProps } from "./typings/Option";

export default class OptionGroupCheckBox<
  OptionType
> extends React.PureComponent<OptionGroupCheckBoxProps<OptionType>> {
  isSelected = (value: OptionType) => {
    const { selected } = this.props;
    return !!selected && selected.includes(value);
  };
  handleChange: OptionGroup<OptionType>["props"]["handleChange"] = (
    { value },
    event
  ) => {
    this.props.onChange(
      getSelectedCheckboxes<OptionType>(value, this.props.selected),
      {
        props: this.props,
        event
      }
    );
  };
  selectVisible = () => {
    const { children } = this.props;
    const _values = (
      React.Children.map(
        children,
        child => child as React.ReactElement<OptionProps<OptionType>>
      ) || []
    )
      .filter(_child => _child && _child.props && _child.props.value)
      .map(_child => _child && _child.props && _child.props.value);
    this.props.onChange(_values, { props: this.props });
  };
  clearVisible = () => {
    this.props.onChange([], { props: this.props, event });
  };
  onApply = () => {
    const { onApply, selected } = this.props;
    if (onApply) onApply(selected || [], this.props);
  };
  render() {
    const {
      wrapClassName,
      onApply,
      onClear,
      isSelected,
      onChange,
      ...rest
    } = this.props;
    const advancedOptionsProps = {
      selectVisible: this.selectVisible,
      clearVisible: this.clearVisible,
      ...this.props.advancedOptionsProps
    };
    return (
      <div className={cx(styles.optionGroupCheckBoxWrap, wrapClassName)}>
        <OptionGroup<OptionType>
          {...rest}
          advancedOptionsProps={advancedOptionsProps}
          isSelected={isSelected || this.isSelected}
          handleChange={this.handleChange}
          multiSelect
        />

        {(onApply || onClear) && (
          <div className={styles.optionGroupCheckBoxButtonWrap}>
            {onClear && (
              <Button type="secondary" onClick={onClear}>
                Clear
              </Button>
            )}
            {onApply && <Button onClick={this.onApply}>Apply</Button>}
          </div>
        )}
      </div>
    );
  }
}
