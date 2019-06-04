import * as React from "react";
import { Radio, RadioGroup } from "../";
import { mount } from "enzyme";
import sinon from "sinon";
import combos from "combos";
import renderer from "react-test-renderer";
import { cx } from "emotion";
import {
  setWrap,
  selectedButton,
  unSelectedButton
} from "./fixtures/radioSet.style";

function noop() {}

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

describe("set of radios", () => {
  const _props = {
    value: ["ON", "OFF"]
  };
  const _combos = combos(_props);

  test.each(_combos)("%o", props => {
    const toggle = renderer.create(
      <RadioGroup
        selected={props.value}
        onChange={noop}
        name="set of radios"
        className={setWrap}
      >
        <Radio
          value="OFF"
          label=""
          className={cx({
            [unSelectedButton]: true,
            [selectedButton]: props.value === "OFF"
          })}
        >
          {() => "OFF"}
        </Radio>
        <Radio
          value="ON"
          label=""
          className={cx({
            [unSelectedButton]: true,
            [selectedButton]: props.value === "ON"
          })}
        >
          {() => "ON"}
        </Radio>
      </RadioGroup>
    );
    const tree = toggle.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
