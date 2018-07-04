import * as React from "react";
import { storiesOf } from "@storybook/react";
import SideBar from "@src/components/Sidebar";
import { css } from "react-emotion";
import { boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

const wrapperStyle = css({
  width: 400,
  height: 400,
  backgroundColor: "green"
});

storiesOf("SideBar", module).add("simple", () => (
  <SideBar
    onClose={action("close")}
    width={number("Width", 400)}
    isOpen={boolean("isOpen", true)}
  >
    <div className={wrapperStyle} onClick={() => {}} />
  </SideBar>
));
