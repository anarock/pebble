import renderer from "react-test-renderer";
import combos from "combos";
import Toggle from "../Toggle";
import * as React from "react";
import { mount } from "enzyme";
import sinon from "sinon";
import Button from "../Button";

function noop() {}

describe("Toggle", () => {
  const _props = {
    value: ["ON", "OFF"],
    onButtonText: ["AM"],
    offButtonText: ["PM"]
  };
  const _combos = combos(_props);

  test.each(_combos)("%o", props => {
    const timePicker = renderer.create(<Toggle {...props} onChange={noop} />);

    const tree = timePicker.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("TimePicker: functionality test", () => {
  test("should call onChange on click", () => {
    const spy = sinon.spy();

    const toggle = mount(
      <Toggle
        value={"ON"}
        onChange={spy}
        onButtonText="AM"
        offButtonText="PM"
      />
    );

    toggle
      .find(Button)
      .at(0)
      .simulate("click");

    expect(spy.calledOnce).toBeTruthy();
  });
});
