import * as React from "react";
import Radio from "../Radio";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import sinon from "sinon";

describe("Radio", () => {
  test("snapshot", () => {
    const radio = renderer.create(
      <Radio
        checked
        onChange={() => {}}
        value="radio"
        label="I am radio button"
      />
    );

    const tree = radio.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should call onChange on click with correct arguments", () => {
    const spy = sinon.spy();

    const radio = mount(
      <Radio onChange={spy} value="radio" label="I am radio button" />
    );

    radio.simulate("click");

    expect(
      spy.calledWith({
        value: "radio",
        checked: true
      })
    ).toBeTruthy();
  });

  test("should not call onChange if disabled", () => {
    const spy = sinon.spy();

    const radio = mount(
      <Radio onChange={spy} value="radio" label="I am radio button" disabled />
    );

    radio.simulate("click");

    expect(spy.called).toBeFalsy();
  });
});
