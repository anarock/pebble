import * as React from "react";
import { RadioProps } from "./typings/Radio";
import Control from "./shared/Control";

const Radio: React.SFC<RadioProps> = (props: RadioProps) => (
  <Control {...props} type="radio" />
);
export default Radio;
