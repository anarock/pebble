import * as React from "react";
import OptionGroup from "../OptionGroup";
import renderer from "react-test-renderer";
import Option from "../Option";
import sinon from "sinon";
import { mount } from "enzyme";

function getComponent(multiSelect, spy) {
  return (
    <OptionGroup
      multiSelect={multiSelect}
      selected={multiSelect ? ["option-1"] : "option-1"}
      onChange={spy}
    >
      <Option value="option-1" label="I am an option" />
      <Option value="option-2" label="I am an option" />
      <Option value="option-3" label="I am an option" />
    </OptionGroup>
  );
}

describe("OptionGroup Component", () => {
  test("snapshot in selected state", () => {
    const checkbox = renderer.create(getComponent(false, () => {}));

    const tree = checkbox.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("singleSelect - should get called with correct arguments.", () => {
    const spy = sinon.spy();
    const optionGroup = mount(getComponent(false, spy));

    optionGroup
      .find(Option)
      .at(0)
      .simulate("click");

    expect(spy.calledWith(undefined)).toBeTruthy();

    optionGroup
      .find(Option)
      .at(1)
      .simulate("click");
    expect(spy.calledWith("option-2")).toBeTruthy();
  });

  test("multiSelect - should get called with correct arguments.", () => {
    const spy = sinon.spy();
    const optionGroup = mount(getComponent(true, spy));

    optionGroup
      .find(Option)
      .at(0)
      .simulate("click");

    expect(spy.calledWith([])).toBeTruthy();

    optionGroup
      .find(Option)
      .at(1)
      .simulate("click");
    expect(spy.calledWith(["option-1", "option-2"])).toBeTruthy();
  });
});
