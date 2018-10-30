import * as React from "react";
import { shallow } from "enzyme";
import Controls from "../Controls";
import sinon, { SinonSpy } from "sinon";
import { ControlsProps } from "../typings/Controls";

const data = [
  {
    id: 1,
    label: "test1"
  },
  {
    id: 2,
    label: "test2"
  },
  {
    id: 3,
    label: "test3"
  }
];

const getControlComponent = (
  type: ControlsProps["type"],
  spy: SinonSpy,
  selected: ControlsProps["selected"],
  allowUnselectForRadio?: boolean
) =>
  shallow(
    <Controls
      onChange={spy}
      keyExtractor={item => item.id}
      renderElement={({ item, isSelected }) => (
        <span className={isSelected ? "selected" : "unselected"}>
          {item.label}
        </span>
      )}
      data={data}
      type={type}
      selected={selected}
      className="testControls"
      allowToggle={allowUnselectForRadio}
    />
  );

describe("Component: Controls", () => {
  describe("type: checkbox", () => {
    test("correctly sets values", () => {
      const spy = sinon.spy();
      const controls = getControlComponent("checkbox", spy, [1, 3]);

      expect(controls.find(".selected")).toHaveLength(2);
    });

    test("correctly add the value", () => {
      const spy = sinon.spy();
      const controls = getControlComponent("checkbox", spy, [1, 3]);

      controls
        .find(".testControls > div")
        .at(1)
        .simulate("click");

      expect(
        spy.calledWith({
          selected: [1, 3, 2]
        })
      ).toBeTruthy();
    });

    test("correctly unselects the value", () => {
      const spy = sinon.spy();

      const controls = getControlComponent("checkbox", spy, [1, 3]);

      controls
        .find(".testControls > div")
        .at(0)
        .simulate("click");

      expect(
        spy.calledWith({
          selected: [3]
        })
      ).toBeTruthy();
    });
  });

  describe("type: radio", () => {
    test("correctly sets values", () => {
      const spy = sinon.spy();
      const controls = getControlComponent("radio", spy, 1);

      expect(controls.find(".selected")).toHaveLength(1);
    });

    test("correctly changes the value", () => {
      const spy = sinon.spy();
      const controls = getControlComponent("radio", spy, 1);

      controls
        .find(".testControls > div")
        .at(1)
        .simulate("click");

      expect(
        spy.calledWith({
          selected: 2
        })
      ).toBeTruthy();
    });

    test("correctly un-selects the value", () => {
      const spy = sinon.spy();
      const controls = getControlComponent("radio", spy, 1, true);

      controls
        .find(".testControls > div")
        .at(0)
        .simulate("click");

      expect(
        spy.calledWith({
          selected: null
        })
      ).toBeTruthy();
    });
  });
});
