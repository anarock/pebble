import * as React from "react";
import { Checkbox, CheckboxGroup } from "../";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import sinon from "sinon";

describe("CheckboxGroup", () => {
  test("snapshot", () => {
    const spy = sinon.spy();
    const component = renderer.create(
      <CheckboxGroup
        selected={["checkbox-1"]}
        onChange={spy}
        name="test"
        testId="checkbox-group"
      >
        <Checkbox value="checkbox-0" label="I am a checkbox" />
        <Checkbox value="checkbox-1" label="I am a checkbox" />
      </CheckboxGroup>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should call onChange on click with correct arguments", () => {
    const spy = sinon.spy();

    const checkbox = mount(
      <CheckboxGroup selected={["checkbox-1"]} onChange={spy} name="test">
        <Checkbox value="checkbox-0" label="I am a checkbox" />
        <Checkbox value="checkbox-1" label="I am a checkbox" />
      </CheckboxGroup>
    );

    checkbox.find(Checkbox).at(1).simulate("click");

    expect(spy.calledWith([])).toBeTruthy();

    checkbox.setProps({
      selected: []
    });

    checkbox.find(Checkbox).at(0).simulate("click");

    expect(spy.calledWith(["checkbox-0"])).toBeTruthy();
  });

  test("should append checkbox test ids for children", () => {
    const spy = sinon.spy();

    const checkbox = mount(
      <CheckboxGroup
        selected={[]}
        onChange={spy}
        name="test"
        testId="checkbox-group"
      >
        <Checkbox value="checkbox-0" label="I am a checkbox" />
        <Checkbox value="checkbox-1" label="I am a checkbox" />
      </CheckboxGroup>
    );

    expect(
      checkbox.find("[data-testid='checkbox-group-checkbox-0']").length
    ).toBe(1);
    expect(
      checkbox.find("[data-testid='checkbox-group-checkbox-1']").length
    ).toBe(1);
  });
});
