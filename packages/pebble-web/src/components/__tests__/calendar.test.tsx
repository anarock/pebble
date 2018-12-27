import * as React from "react";
import Calendar from "../Calendar";
import sinon from "sinon";
import { mount } from "enzyme";
import { format, getTime, startOfDay, endOfDay } from "date-fns";

const date = [new Date(2012, 11, 1), new Date(2012, 12, 1)];

describe("Calendar", () => {
  test("should return correct range value on apply", () => {
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
      .args[0].map((x: Date) => format(x, "DD-MM-YYYY"));
    expect(argument).toEqual(["01-12-2012", "11-12-2012"]);

    calendar
      .find(".calendar-test > div")
      .at(1)
      .find("button")
      .at(0)
      .simulate("click");

    expect(clearSpy.calledOnce).toBeTruthy();
  });

  test("should return correct date value on single select after apply", () => {
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

    calendar
      .find(".calendar-test > div")
      .at(1)
      .find("button")
      .at(1)
      .simulate("click");

    const argument = applySpy.getCall(0).args[0].map((x: Date) => getTime(x));
    expect(argument).toEqual([
      getTime(startOfDay("12/01/2012")),
      getTime(endOfDay("12/01/2012"))
    ]); // MM/DD/YYYY
  });

  test("should return correct value on apply", () => {
    const applySpy = sinon.spy();
    const clearSpy = sinon.spy();
    const changeSpy = sinon.spy();

    const calendar = mount(
      <Calendar
        className="calendar-test"
        onApply={applySpy}
        onClear={clearSpy}
        onChange={changeSpy}
        selected={date[0]}
      />
    );
    calendar
      .find(".react-calendar__tile")
      .at(0)
      .simulate("click");

    expect(changeSpy.calledOnce).toBeTruthy();

    calendar
      .find(".calendar-test > div")
      .at(1)
      .find("button")
      .at(1)
      .simulate("click");

    const argument = format(applySpy.getCall(0).args[0], "DD-MM-YYYY");
    expect(argument).toEqual("01-12-2012");

    calendar
      .find(".calendar-test > div")
      .at(1)
      .find("button")
      .at(0)
      .simulate("click");

    expect(clearSpy.calledOnce).toBeTruthy();
  });
});
