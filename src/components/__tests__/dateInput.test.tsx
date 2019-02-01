import * as React from "react";
import DateInput from "../DateInput";
import sinon from "sinon";
import { mount } from "enzyme";
import { format } from "date-fns";
import Input from "../Input";

const date = new Date(2012, 11, 1);

describe("DateInput", () => {
  test("should return correct value on apply", () => {
    const changeSpy = sinon.spy();

    const dateInput = mount(
      <DateInput placeholder="Select Date" onChange={changeSpy} value={date} />
    );
    dateInput.find(Input).simulate("click");

    dateInput
      .find(".react-calendar__tile")
      .at(0)
      .simulate("click");

    expect(changeSpy.calledOnce).toBeTruthy();

    const argument = format(changeSpy.getCall(0).args[0], "DD-MM-YYYY");
    expect(argument).toEqual("01-12-2012");
  });
});
