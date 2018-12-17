import * as React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import sinon from "sinon";

import Option from "../Option";
import OptionGroup from "../shared/OptionGroup";

function getComponent(props: Partial<OptionGroup["props"]> = {}) {
  return (
    <OptionGroup isSelected={() => false} handleChange={() => {}} {...props}>
      {[...Array(12)].map((_, i) => (
        <Option value={`option-${i}`} label={`Option ${i}`} key={i} />
      ))}
    </OptionGroup>
  );
}

describe("Component: OptionGroup", () => {
  test("default snapshot", () => {
    const component = renderer.create(getComponent());
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("with searchbox", () => {
    const component = renderer.create(
      getComponent({
        searchBox: true,
        searchBoxProps: {
          value: "",
          placeholder: "Search",
          onChange: () => {}
        }
      })
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("multi option group", () => {
    const component = renderer.create(
      getComponent({
        multiSelect: true,
        searchBox: true,
        searchBoxProps: {
          value: "",
          placeholder: "Search",
          onChange: () => {}
        }
      })
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("click events", () => {
    const spy = sinon.spy();
    const component = mount(
      getComponent({
        multiSelect: true,
        handleChange: spy
      })
    );

    component
      .find(Option)
      .at(0)
      .simulate("click");

    expect(spy.calledOnce).toBeTruthy();

    expect(
      spy.calledWith({
        value: "option-0",
        checked: true
      })
    ).toBeTruthy();
  });

  test("keyboard events", () => {
    const spy = sinon.spy();
    const component = mount(
      getComponent({
        multiSelect: true,
        handleChange: spy,
        searchBox: true,
        searchBoxProps: {
          value: "",
          placeholder: "Search",
          onChange: () => {}
        }
      })
    );

    expect(spy.notCalled).toBeTruthy();

    const input = component.find("input");

    input
      .simulate("focus")
      .simulate("keydown", {
        which: 40 // down
      })
      .simulate("keydown", {
        which: 40 // down
      })
      .simulate("keydown", {
        which: 13 // enter
      });

    expect(
      spy.calledWith({
        value: "option-1",
        checked: true
      })
    ).toBeTruthy();

    input
      .simulate("keydown", {
        which: 40 // down
      })
      .simulate("keydown", {
        which: 40 // down
      })
      .simulate("keydown", {
        which: 38 // down
      })
      .simulate("keydown", {
        which: 13 // enter
      });

    expect(
      spy.calledWith({
        value: "option-2",
        checked: true
      })
    ).toBeTruthy();
  });
});
