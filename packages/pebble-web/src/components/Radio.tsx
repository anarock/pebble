import * as React from "react";
import { RadioProps } from "./typings/Radio";
import Control from "./shared/Control";

export default function Radio<OptionType>(props: RadioProps<OptionType>) {
  return <Control {...props} type="radio" />;
}
