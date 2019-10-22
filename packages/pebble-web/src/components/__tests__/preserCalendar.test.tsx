import * as React from "react";
import PresetCalendar from "../PresetCalendar";
import { mount } from "enzyme";
import {
  startOfToday,
  endOfToday,
  startOfYesterday,
  endOfYesterday,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
  startOfQuarter,
  endOfQuarter
} from "date-fns";
import sinon from "sinon";

describe("PresetCalendar", () => {
  test("should return correct range value on apply", () => {
    const date = new Date();
    const applySpy = sinon.spy();
    const clearSpy = sinon.spy();
    const changeSpy = sinon.spy();
    const presetCalendar = mount(
      <PresetCalendar
        isOpen
        onChange={changeSpy}
        maxDate={new Date()}
        onClear={clearSpy}
        onApply={applySpy}
        range
        tileDots={[{}]}
        presetDateOptions={[
          {
            label: "All Time",
            dateRange: [undefined, undefined]
          },
          {
            label: "Today",
            dateRange: [startOfToday(), endOfToday()]
          },
          {
            label: "Yesterday",
            dateRange: [startOfYesterday(), endOfYesterday()]
          },
          {
            label: "Week till date",
            dateRange: [startOfWeek(date), endOfWeek(date)]
          },
          {
            label: "Month till date",
            dateRange: [startOfMonth(date), endOfMonth(date)]
          },
          {
            label: "Year till date",
            dateRange: [startOfYear(date), endOfYear(date)]
          },
          {
            label: "Quarter till date",
            dateRange: [startOfQuarter(date), endOfQuarter(date)]
          }
        ]}
        initialValue={[undefined, undefined]}
      />
    );

    presetCalendar
      .find("button")
      .at(1)
      .simulate("click");
    expect(applySpy.calledOnce).toBeTruthy();
    const argument = applySpy.getCall(0).args[0];
    expect(argument).toEqual([startOfToday(), endOfToday()]);
  });
});
