import * as React from "react";
import { mount } from "enzyme";
import Toast from "../Toast";
import sinon from "sinon";

describe("Component: Toast", () => {
  test("renders when called and disappears automatically.", () => {
    const clock = sinon.useFakeTimers();

    const toast = mount(<Toast />);

    Toast.show("Hello there", "success");

    expect(toast.state()).toEqual({
      text: "Hello there",
      show: true,
      type: "success"
    });

    clock.tick(5000);
    expect(toast.state("show")).toBeFalsy();
  });

  test("manually hide toast", () => {
    const toast = mount(<Toast />);

    Toast.show("Hello there", "success");
    expect(toast.state("show")).toBeTruthy();

    Toast.hide();
    expect(toast.state("show")).toBeFalsy();
  });

  test("toast show time", () => {
    const clock = sinon.useFakeTimers();

    const toast = mount(<Toast defaultTime={10000} />);

    Toast.show("Hello there", "success");

    expect(toast.state()).toEqual({
      text: "Hello there",
      show: true,
      type: "success"
    });

    clock.tick(10000);
    expect(toast.state("show")).toBeFalsy();
  });

  test("toast.show time argument value is of higher priority than defaultTime prop", () => {
    const clock = sinon.useFakeTimers();

    const toast = mount(<Toast defaultTime={10000} />);

    Toast.show("Hello there", "success", 15000);

    expect(toast.state()).toEqual({
      text: "Hello there",
      show: true,
      type: "success"
    });

    clock.tick(10000);
    expect(toast.state("show")).toBeTruthy();

    clock.tick(5000);
    expect(toast.state("show")).toBeFalsy();
  });
});
