import * as React from "react";
import Control from "./shared/Control";
import { CheckboxProps } from "./typings/Checkbox";

const Checkbox: React.SFC<CheckboxProps> = props => (
  <Control {...props} type="checkbox" />
);
export default Checkbox;
