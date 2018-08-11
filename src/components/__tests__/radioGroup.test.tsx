import * as React from "react";
import { Radio, RadioGroup } from "../";
import { mount } from "enzyme";
import sinon from "sinon";

describe("RadioGroup", () => {
  test("should call onChange on click with correct arguments", () => {
    const spy = sinon.spy();

    const radio = mount(
      <RadioGroup selected={"radio-2"} onChange={spy} name="test">
        <Radio value="radio-1" label="I am radio button" />
        <Radio value="radio-2" label="I am radio button" />
      </RadioGroup>
    );

    radio
      .find(Radio)
      .at(1)
      .simulate("click");
    expect(spy.called).toBeFalsy();

    radio
      .find(Radio)
      .at(0)
      .simulate("click");

    expect(spy.calledWith("radio-1")).toBeTruthy();
  });

  test("should call onChange on click with correct arguments", () => {
    const spy = sinon.spy();

    const radio = mount(
      <RadioGroup selected={"radio-1"} onChange={spy} name="test" toggle>
        <Radio value="radio-1" label="I am radio button" />
        <Radio value="radio-2" label="I am radio button" />
      </RadioGroup>
    );

    radio
      .find(Radio)
      .at(0)
      .simulate("click");

    expect(spy.calledWith(undefined)).toBeTruthy();
  });
});
