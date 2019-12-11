import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import {
  render,
  fireEvent
  // waitForElement,
  // waitForElementToBeRemoved
} from "@testing-library/react";
import Calendar from "../Calendar";
import sinon from "sinon";
import { format, getTime, startOfDay, endOfDay } from "date-fns";

const date: [Date, Date] = [new Date(2012, 11, 1), new Date(2012, 12, 1)];

describe("Calendar", () => {
  test("should return correct range value on apply", () => {
    const applySpy = sinon.spy();
    const clearSpy = sinon.spy();
    const changeSpy = sinon.spy();

    const { getByText } = render(
      <Calendar
        wrapperClassName="calendar-test"
        onApply={applySpy}
        range
        onClear={clearSpy}
        onChange={changeSpy}
        selected={date}
      />
    );

    fireEvent.click(getByText("1"));

    // in case of range selector onChange should only be called once
    // both values of range have been selected.
    expect(changeSpy.calledOnce).toBeFalsy();

    fireEvent.click(getByText("11"));

    fireEvent.click(getByText("Apply"));

    const argument = applySpy
      .getCall(0)
      .args[0].map((x: Date) => format(x, "dd-MM-yyyy"));
    expect(argument).toEqual(["01-12-2012", "11-12-2012"]);

    fireEvent.click(getByText("Clear"));

    expect(clearSpy.calledOnce).toBeTruthy();
  });

  test("should return correct date value on single select after apply", () => {
    const applySpy = sinon.spy();
    const clearSpy = sinon.spy();
    const changeSpy = sinon.spy();

    const { getByText } = render(
      <Calendar
        wrapperClassName="calendar-test"
        onApply={applySpy}
        range
        onClear={clearSpy}
        onChange={changeSpy}
        selected={date}
      />
    );

    fireEvent.click(getByText("1"));

    fireEvent.click(getByText("Apply"));

    const argument = applySpy.getCall(0).args[0].map((x: Date) => getTime(x));
    expect(argument).toEqual([
      getTime(startOfDay(new Date().setFullYear(2012, 11, 1))),
      getTime(endOfDay(new Date().setFullYear(2012, 11, 1)))
    ]); // MM/DD/YYYY
  });

  test("should return correct value on apply", () => {
    const applySpy = sinon.spy();
    const clearSpy = sinon.spy();
    const changeSpy = sinon.spy();

    const { getByText } = render(
      <Calendar
        wrapperClassName="calendar-test"
        onApply={applySpy}
        onClear={clearSpy}
        onChange={changeSpy}
        selected={date[0]}
      />
    );
    fireEvent.click(getByText("1"));

    expect(changeSpy.calledOnce).toBeTruthy();

    fireEvent.click(getByText("Apply"));

    const argument = format(applySpy.getCall(0).args[0], "dd-MM-yyyy");
    expect(argument).toEqual("01-12-2012");

    fireEvent.click(getByText("Clear"));

    expect(clearSpy.calledOnce).toBeTruthy();
  });

  test("onclear the previously selected value must get cleared", () => {
    const clearSpy = sinon.spy();
    const applySpy = sinon.spy();
    const changeSpy = sinon.spy();

    const { getByText } = render(
      <Calendar
        wrapperClassName="calendar-test"
        onApply={applySpy}
        onClear={clearSpy}
        onChange={changeSpy}
        range
      />
    );

    fireEvent.click(getByText("1"));

    fireEvent.click(getByText("11"));

    fireEvent.click(getByText("Clear"));

    expect(clearSpy.calledOnce).toBeTruthy();

    fireEvent.click(getByText("Apply"));

    expect(applySpy.calledOnce).toBeTruthy();

    const argument = applySpy.getCall(0).args[0];
    expect(argument).toEqual(undefined);
  });
});
