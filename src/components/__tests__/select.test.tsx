import * as React from "react";
import renderer from "react-test-renderer";
import Option from "../Option";
import Select from "../Select";
import { mount } from "enzyme";
import sinon from "sinon";
import Input from "../Input";

function getComponent(spy = () => {}) {
  return (
    <Select onSelect={spy} placeholder="Choose Option" selected={"option-2"}>
      {new Array(5).fill(1).map((_x, i) => (
        <Option value={`option-${i + 1}`} label="I am an option" />
      ))}
    </Select>
  );
}

describe("Component: Select", () => {
  test("snapshot", () => {
    const select = renderer.create(getComponent());
    const tree = select.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should open when input is clicked", () => {
    const spy = sinon.spy();
    const select = mount(getComponent(spy));

    expect(select.find(Option)).toHaveLength(0);

    select.find(Input).simulate("click");
    expect(select.find(Option)).toHaveLength(5);
  });

  test("should trigger onSelect with correct onChange", () => {
    const spy = sinon.spy();
    const select = mount(getComponent(spy));
    select.find(Input).simulate("click");
    select
      .find(Option)
      .at(2)
      .simulate("click");

    expect(spy.calledWith("option-3")).toBeTruthy();
    expect(select.find(Option)).toHaveLength(0);
  });
});
