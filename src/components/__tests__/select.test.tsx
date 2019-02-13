import * as React from "react";
import renderer from "react-test-renderer";
import Option from "../Option";
import Select from "../Select";
import { mount } from "enzyme";
import sinon from "sinon";
import { SingleSelectProps, MultiSelectProps } from "../typings/Select";
import Button from "../Button";
import Input from "../Input";
import Search from "../Search";
import "../../../tests/__setup__/matchers";

const options = new Array(5)
  .fill(1)
  .map((_x, i) => (
    <Option key={i + 1} value={`option-${i + 1}`} label="I am an option" />
  ));

const noop = () => {};

function getComponent(
  spy = noop,
  props: Partial<SingleSelectProps<string>> = {}
) {
  return (
    <Select
      onChange={spy}
      placeholder="Choose Option"
      selected={"option-2"}
      {...props}
    >
      {options}
    </Select>
  );
}

function getMultiSelectComponent<T>(
  spy = noop,
  props: Partial<MultiSelectProps<T>> = {}
) {
  return (
    <Select<T>
      onChange={spy}
      placeholder="Choose Option"
      multiSelect
      {...props}
    >
      {options}
    </Select>
  );
}

describe("Component: Select", () => {
  test("single-select: snapshot", () => {
    const select = renderer.create(getComponent());
    const tree = select.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("multi-select: snapshot", () => {
    const select = renderer.create(
      getMultiSelectComponent(undefined, {
        multiSelect: true,
        selected: []
      })
    );
    const tree = select.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("single-select with searchbox: snapshot", () => {
    const select = renderer.create(
      getComponent(undefined, {
        searchBox: true,
        searchBoxProps: {
          placeholder: "Search",
          onChange: () => {},
          value: ""
        }
      })
    );
    const tree = select.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should open when input is clicked", () => {
    const spy = sinon.spy();
    const select = mount(getComponent(spy));

    select.find(Input).simulate("click");
    expect(select.find(Option)).toHaveLength(5);
  });

  test("single select: should trigger onChange with correct onChange", () => {
    const clock = sinon.useFakeTimers();
    const spy = sinon.spy();
    const select = mount(getComponent(spy));
    select.find(Input).simulate("click");
    select
      .find(Option)
      .at(2)
      .simulate("click");

    expect(spy.calledWith("option-3")).toBeTruthy();

    // wait for the dropdown animation to get over.
    clock.tick(1000);

    // This means that Option is no more rendered in DOM.
    expect(select).toNotBeInDOM("[data-test-id='optiongroup']");
  });

  test("multi select: should trigger onChange with correct onChange", () => {
    const clock = sinon.useFakeTimers();
    const spy = sinon.spy();
    const applySpy = sinon.spy();
    const clearSpy = sinon.spy();
    const select = mount(
      getMultiSelectComponent(spy, {
        multiSelect: true,
        onApply: applySpy,
        onClear: clearSpy,
        selected: []
      })
    );
    select.find(Input).simulate("click");
    select
      .find(Option)
      .at(2)
      .simulate("click");

    expect(spy.calledWith(["option-3"])).toBeTruthy();

    select.setProps({
      selected: ["option-3"]
    });

    select
      .find(Option)
      .at(3)
      .simulate("click");

    expect(spy.calledWith(["option-3", "option-4"])).toBeTruthy();

    select.setProps({
      selected: ["option-3", "option-4"]
    });

    select
      .find(Option)
      .at(2)
      .simulate("click");

    expect(spy.calledWith(["option-4"])).toBeTruthy();

    expect(select.find(Button)).toHaveLength(2);

    // test onClear
    select
      .find(Button)
      .at(0)
      .simulate("click");
    expect(clearSpy.calledOnce).toBeTruthy();

    // Reopen dropdown and test onApply
    select.find(Input).simulate("click");
    select.setProps({
      selected: ["option-3"]
    });

    select
      .find(Button)
      .at(1)
      .simulate("click");
    expect(applySpy.calledWith(["option-3"])).toBeTruthy();

    clock.tick(1000);

    // ensure the dropdown is closed
    expect(select).toNotBeInDOM("[data-test-id='optiongroup']");
  });

  test("single select: query change triggers onChange", () => {
    const spy = sinon.spy();
    const queryChangeSpy = sinon.spy();

    const select = mount(
      getComponent(spy, {
        searchBox: true,
        searchBoxProps: {
          placeholder: "Search",
          onChange: queryChangeSpy,
          value: ""
        }
      })
    );
    select.find(Input).simulate("click");
    select
      .find(Search)
      .find("input")
      .simulate("change", {
        target: {
          value: "hello"
        }
      });

    expect(queryChangeSpy.calledWith("hello")).toBeTruthy();
  });

  test("single select: clearing query triggers onChange", () => {
    const spy = sinon.spy();
    const clearQuerySpy = sinon.spy();
    const select = mount(
      getComponent(spy, {
        searchBox: true,
        searchBoxProps: {
          placeholder: "Search",
          onChange: clearQuerySpy,
          value: "hello"
        }
      })
    );
    select.find(Input).simulate("click");

    select
      .find(Search)
      .find(".pi-close")
      .simulate("click");
    expect(clearQuerySpy.calledWith("")).toBeTruthy();
  });

  test("single select: onDropdownToggle is triggered correctly", () => {
    const spy = sinon.spy();
    const toggleSpy = sinon.spy();

    const select = mount(
      getComponent(spy, {
        searchBox: true,
        onDropdownToggle: toggleSpy
      })
    );

    // The animation hasn't run yet so the component won't be even present in the vDOM
    expect(select.find(Option)).toHaveLength(0);

    select.find(Input).simulate("click");
    expect(select.find(Option)).toHaveLength(5);
    expect(toggleSpy.calledWith(false)).toBeTruthy();

    select.find(Input).simulate("click");
    expect(toggleSpy.calledWith(true)).toBeTruthy();
  });
});

test("should not open if disabled when input is clicked", () => {
  const spy = sinon.spy();
  const toggleSpy = sinon.spy();

  const select = mount(
    getComponent(spy, {
      searchBox: true,
      onDropdownToggle: toggleSpy
    })
  );

  // The animation hasn't run yet so the component won't be even present in the vDOM
  expect(select.find(Option)).toHaveLength(0);

  select.find(Input).simulate("click");
  expect(toggleSpy.calledWith(false)).toBeTruthy();
});
