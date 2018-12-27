import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../src/components/Button";
import OutsideClick from "../src/components/OutsideClick";

function noop() {}

storiesOf("Utilities/OutsideClick", module).add("test", () => (
  <OutsideClick onOutsideClick={() => alert("You clicked outside")}>
    <Button onClick={noop}>Click outside</Button>
  </OutsideClick>
));
