import * as React from "react";
import { getSelectedCheckboxes } from "./utils/getSelectedCheckboxes";
import Button from "./Button";
import OptionGroup from "./shared/OptionGroup";
import { OptionGroupCheckBoxProps } from "./typings/OptionGroupCheckBox";
import * as styles from "../components/styles/OptionGroupCheckBox.styles";

const OptionGroupCheckBox: React.FunctionComponent<
  OptionGroupCheckBoxProps
> = props => {
  const { onApply, onClear, selected = [], onChange, ...rest } = props;
  return (
    <div className={styles.optionGroupCheckBoxWrap}>
      <OptionGroup
        {...rest}
        isSelected={value => !!selected && selected.indexOf(value) >= 0}
        handleChange={({ value }, event) => {
          onChange(getSelectedCheckboxes(value, selected), { props, event });
        }}
        multiSelect
      />

      {(onApply || onClear) && (
        <div className={styles.optionGroupCheckBoxButtonWrap}>
          {onClear && (
            <Button type="secondary" onClick={onClear}>
              Clear
            </Button>
          )}
          {onApply && (
            <Button onClick={() => onApply && onApply(selected, props)}>
              Apply
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default OptionGroupCheckBox;
