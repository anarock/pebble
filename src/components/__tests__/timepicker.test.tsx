import renderer from "react-test-renderer";
import combos from "combos";
import TimePicker from "../TimePicker";
import * as React from "react";
import { mount } from "enzyme";
import sinon from "sinon";
import { DropDownButton } from "../Button";
import Option from "../Option";

function noop() {}

describe("TimePicker", () => {
  const _props = {
    selectedHour: [...Array(12)].map((_, i) => i + 1),
    selectedMinute: [...Array(4)].map((_, i) => i * 15)
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

    const timePicker = mount(
      <TimePicker onHourChange={spyHour} onMinuteChange={spyMinute} />
    );
    expect(timePicker.find(Option)).toHaveLength(0);

    timePicker
      .find(DropDownButton)
      .at(0)
      .simulate("click");
    expect(timePicker.find(Option)).toHaveLength(12);
    timePicker.unmount();

    timePicker.mount();
    timePicker
      .find(DropDownButton)
      .at(1)
      .simulate("click");

    expect(timePicker.find(Option)).toHaveLength(4);
  });
});
