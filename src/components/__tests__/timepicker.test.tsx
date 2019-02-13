import renderer from "react-test-renderer";
import combos from "combos";
import TimePicker from "../TimePicker";
import * as React from "react";
import { mount } from "enzyme";
import sinon from "sinon";
import Option from "../Option";
import DropDown from "../DropDown";

function noop() {}

describe("TimePicker", () => {
  const _props = {
    selectedHour: [1, 12, undefined],
    selectedMinute: [0, 15, undefined]
  };

  const _combos = combos(_props);

  test.each(_combos)("%o", props => {
    const timePicker = renderer.create(
      <TimePicker {...props} onHourChange={noop} onMinuteChange={noop} />
    );

    const tree = timePicker.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("TimePicker: functionality test", () => {
  test("should call onHourChange/onMinuteChange on click", () => {
    const spyHour = sinon.spy();
    const spyMinute = sinon.spy();
    const clock = sinon.useFakeTimers();

    const timePicker = mount(
      <TimePicker onHourChange={spyHour} onMinuteChange={spyMinute} />
    );
    timePicker.find("[data-test-id='hour-label']").simulate("click");

    clock.tick(10000);

    timePicker
      .find(DropDown)
      .at(0)
      .find(Option)
      .at(0)
      .simulate("click");

    expect(spyHour.calledOnce).toBeTruthy();
    expect(spyHour.calledWith(1)).toBeTruthy();

    timePicker.find("[data-test-id='minute-label']").simulate("click");

    clock.tick(10000);

    timePicker
      .find(DropDown)
      .at(1)
      .find(Option)
      .at(0)
      .simulate("click");

    expect(spyMinute.calledOnce).toBeTruthy();
    expect(spyMinute.calledWith(0)).toBeTruthy();
  });
});
