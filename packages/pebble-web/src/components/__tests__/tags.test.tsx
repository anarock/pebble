import * as React from "react";
import { Tabs, TabSection } from "../Tabs";
import { mount } from "enzyme";
import sinon from "sinon";

describe("Tags", () => {
  test("on tab change", () => {
    const tabChangeSpy = sinon.spy();
    const tabs = mount(
      <Tabs
        tabs={["Presets", "Custom"]}
        initialSelectedTab="Presets"
        onTabChange={tabChangeSpy}
      >
        <TabSection section="Presets">{}</TabSection>
        <TabSection section="Custom">{}</TabSection>
      </Tabs>
    );
    tabs
      .find("span")
      .at(1)
      .simulate("click");
    expect(tabChangeSpy.calledOnce).toBeTruthy();
  });
});
