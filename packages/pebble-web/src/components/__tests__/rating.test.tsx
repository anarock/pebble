import * as React from "react";
import { Rating } from "../";
import { mount } from "enzyme";
import sinon from "sinon";

describe("Rating", () => {
  test("should call onChange on click with correct arguments", () => {
    const spy = sinon.spy();

    const rating = mount(
      <Rating name="test rating" maxRating={5} value={2} onChange={spy} />
    );

    rating.find("span").at(0).simulate("click");

    expect(spy.calledWith(1)).toBeTruthy();
  });

  test("should not call onChange on click when disabled", () => {
    const spy = sinon.spy();

    const rating = mount(
      <Rating
        name="test rating"
        maxRating={5}
        value={2}
        onChange={spy}
        disabled
      />
    );

    rating.find("span").at(0).simulate("click");
    expect(spy.called).toBeFalsy();
  });
});
