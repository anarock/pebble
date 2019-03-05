import * as React from "react";
import { mount } from "enzyme";
import sinon from "sinon";
import { TypeaheadProps } from "../typings/Typeahead";
import TypeAhead from "../TypeAhead";
import Option from "../Option";

function getComponent(
  changeSpy = () => {},
  selectSpy = () => {},
  props: Partial<TypeaheadProps<string>> = {}
) {
  return (
    <TypeAhead
      onChange={changeSpy}
      onSelect={selectSpy}
      placeholder="Typeahead"
      valueExtractor={value => `${value} is the best option`}
      selected={`option-3`}
      {...props}
    >
      {new Array(5).fill(1).map((_x, i) => (
        <Option
          key={i + 1}
          value={`option-${i + 1}`}
          label={`I am option-${i + 1}`}
        />
      ))}
    </TypeAhead>
  );
}

test("should open when input is clicked", () => {
  const clock = sinon.useFakeTimers();
  const changeSpy = sinon.spy();
  const selectSpy = sinon.spy();
  const typeAhead = mount(getComponent(changeSpy, selectSpy));

  expect(typeAhead.find(Option)).toHaveLength(0);

  typeAhead.find("input").simulate("focus");

  // wait for the dropdown animation to get over.
  clock.tick(1000);
  expect(typeAhead.find(Option)).toHaveLength(5);
});

test("should trigger onChange with correct onChange", () => {
  const changeSpy = sinon.spy();
  const selectSpy = sinon.spy();
  const timer = sinon.useFakeTimers();
  const typeAhead = mount(getComponent(changeSpy, selectSpy));
  typeAhead.find("input").simulate("focus");
  typeAhead.find("input").simulate("change", {
    target: {
      value: "option"
    }
  });
  timer.tick(510);
  expect(changeSpy.calledWith("option")).toBeTruthy();
});

test("should trigger onSelect with correct onSelect", () => {
  const changeSpy = sinon.spy();
  const selectSpy = sinon.spy();
  const typeAhead = mount(getComponent(changeSpy, selectSpy));
  typeAhead.find("input").simulate("focus");

  typeAhead
    .find(Option)
    .at(2)
    .simulate("click");

  expect(selectSpy.calledWith("option-3")).toBeTruthy();
});
