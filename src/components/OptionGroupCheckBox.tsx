import * as React from "react";
import { getSelectedCheckboxes } from "./utils/getSelectedCheckboxes";
import Button from "./Button";
import OptionGroup from "./shared/OptionGroup";
import { OptionGroupCheckBoxProps } from "./typings/OptionGroupCheckBox";
import * as styles from "../components/styles/OptionGroupCheckBox.styles";

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
  onApply = () => {
    const { onApply, selected } = this.props;
    if (onApply) onApply(selected || [], this.props);
  };
  render() {
    const { onApply, onClear, isSelected, onChange, ...rest } = this.props;
    return (
      <div className={styles.optionGroupCheckBoxWrap}>
        <OptionGroup<OptionType>
          {...rest}
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
