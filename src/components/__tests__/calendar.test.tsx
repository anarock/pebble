import * as React from "react";
import Calendar from "../Calendar";
import sinon from "sinon";
import { mount } from "enzyme";
import format from "date-fns/format";

const date = [new Date(2012, 11, 1), new Date(2012, 12, 1)];

describe("Calendar", () => {
  test("should return correct value on apply", () => {
    const applySpy = sinon.spy();
    const clearSpy = sinon.spy();
    const changeSpy = sinon.spy();

    const calendar = mount(
      <Calendar
        className="calendar-test"
        onApply={applySpy}
        range
        onClear={clearSpy}
        onChange={changeSpy}
        selected={date}
      />
    );
    calendar
      .find(".react-calendar__tile")
      .at(0)
      .simulate("click");

    // in case of range selector onChange should only be called once
    // both values of range have been selected.
    expect(changeSpy.calledOnce).toBeFalsy();

    calendar
      .find(".react-calendar__tile")
      .at(10)
      .simulate("click");

    calendar
      .find(".calendar-test > div")
      .at(1)
      .find("button")
      .at(1)
      .simulate("click");

    const argument = applySpy
      .getCall(0)
      .args[0].map(x => format(x, "DD-MM-YYYY"));
    expect(argument).toEqual(["01-12-2012", "11-12-2012"]);

    calendar
      .find(".calendar-test > div")
      .at(1)
      .find("button")
      .at(0)
      .simulate("click");

    expect(clearSpy.calledOnce).toBeTruthy();
  });
});
