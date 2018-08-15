import * as React from "react";
import { getSelectedCheckboxes } from "./utils/getSelectedCheckboxes";
import * as mixins from "../theme/mixins";
import Button from "./Button";
import OptionGroup from "./shared/OptionGroup";
import { OptionGroupCheckBoxProps } from "./typings/OptionGroupCheckBox";

const OptionGroupCheckBox: React.SFC<OptionGroupCheckBoxProps> = props => {
  let { onApply, onClear, selected, onChange, ...rest } = props;
  return (
    <React.Fragment>
      <OptionGroup
        {...rest}
        isSelected={value => selected && selected.indexOf(value) >= 0}
        handleChange={({ value }) => {
          onChange(getSelectedCheckboxes(value, selected), props);
        }}
        multiSelect
      />

      <div style={{ ...mixins.flexSpaceBetween, padding: 20 }}>
        <Button type="secondary" onClick={onClear}>
          Clear
        </Button>
        <Button onClick={() => onApply(selected, props)}>Apply</Button>
      </div>
    </React.Fragment>
  );
};

export default OptionGroupCheckBox;
