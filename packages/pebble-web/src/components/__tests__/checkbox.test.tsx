import * as React from "react";
import Checkbox from "../Checkbox";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import sinon from "sinon";

describe("Checkbox", () => {
  test("snapshot", () => {
    const checkbox = renderer.create(
      <Checkbox
        checked
        onChange={() => {}}
        value="checkbox"
        label="I am a checkbox"
      />
    );

    const tree = checkbox.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should call onChange on click with correct arguments", () => {
    const spy = sinon.spy();

    const checkbox = mount(
      <Checkbox onChange={spy} value="checkbox" label="I am a checkbox" />
    );

    checkbox.simulate("click");

    expect(
      spy.calledWith({
        value: "checkbox",
        checked: true
      })
    ).toBeTruthy();
  });

  test("should not call onChange if disabled", () => {
    const spy = sinon.spy();

    const checkbox = mount(
      <Checkbox
        onChange={spy}
        value="checkbox"
        label="I am a checkbox"
        disabled
      />
    );

    checkbox.simulate("click");

    expect(spy.called).toBeFalsy();
  });
});
