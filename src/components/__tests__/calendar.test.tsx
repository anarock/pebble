import * as React from "react";
import renderer from "react-test-renderer";
import Calendar from "../Calendar";
import { colors } from "../../theme";
import sinon from "sinon";
import { mount } from "enzyme";
import format from "date-fns/format";

function noop() {}

const date = [new Date(2012, 11, 1), new Date(2012, 12, 1)];

describe("Calendar", () => {
  test("snapshot", () => {
    const calendar = renderer.create(
      <Calendar
        tileDots={[
          {
            timeStamp: Date.now(),
            colors: [colors.blue.base, colors.emerald.base, colors.yellow.base]
          }
        ]}
        onChange={noop}
        onApply={noop}
        onClear={noop}
      />
    );

    const tree = calendar.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should return correct value on apply", () => {
    const applySpy = sinon.spy();
    const clearSpy = sinon.spy();

    const calendar = mount(
      <Calendar
        className="calendar-test"
        onApply={applySpy}
        range
        onClear={clearSpy}
        selected={date}
      />
    );
    calendar
      .find(".react-calendar__tile")
      .at(0)
      .simulate("click");
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

    const argument = applySpy
      .getCall(0)
      .args[0].map(x => format(x, "DD-MM-YYYY"));
    expect(argument).toEqual(["01-12-2012", "01-01-2013"]);
  });
});
