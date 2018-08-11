import * as React from "react";
import { Checkbox, CheckboxGroup } from "../";
import { mount } from "enzyme";
import sinon from "sinon";

describe("CheckboxGroup", () => {
  test("should call onChange on click with correct arguments", () => {
    const spy = sinon.spy();

    const checkbox = mount(
      <CheckboxGroup selected={["checkbox-1"]} onChange={spy} name="test">
        <Checkbox value="checkbox-0" label="I am a checkbox" />
        <Checkbox value="checkbox-1" label="I am a checkbox" />
      </CheckboxGroup>
    );

    checkbox
      .find(Checkbox)
      .at(1)
      .simulate("click");

    expect(spy.calledWith([])).toBeTruthy();

    checkbox.setProps({
      selected: []
    });

    checkbox
      .find(Checkbox)
      .at(0)
      .simulate("click");

    expect(spy.calledWith(["checkbox-0"])).toBeTruthy();
  });
});
