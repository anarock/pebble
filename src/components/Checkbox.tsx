import * as React from "react";
import Control from "./shared/Control";
import { CheckboxProps } from "./typings/Checkbox";

export default function Checkbox<OptionType>(props: CheckboxProps<OptionType>) {
  return <Control {...props} type="checkbox" />;
}
