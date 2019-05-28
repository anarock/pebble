import * as React from "react";
import { storiesOf } from "@storybook/react";
import { color, number } from "@storybook/addon-knobs";
import Loader from "../src/components/Loader";

storiesOf("Components/Loader", module).add("test", () => (
  <Loader color={color("color", "#000")} scale={number("scale", 1)} />
));
