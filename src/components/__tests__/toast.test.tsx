import * as React from "react";
import { mount } from "enzyme";
import Toast from "../Toast";
import sinon from "sinon";

describe("Component: Toast", () => {
  test("snapshot", () => {
    const toast = mount(<Toast />);

    toast.setState({
      show: true,
      text: "hello world",
      type: "success"
    });

    expect(toast).toMatchSnapshot();
  });

  test("renders when called and disappears automatically.", () => {
    const clock = sinon.useFakeTimers();

    const toast = mount(<Toast />);

    Toast.show("Hello there", "success");

    expect(toast.state()).toEqual({
      text: "Hello there",
      show: true,
      type: "success"
    });

    clock.tick(2000);
    expect(toast.state("show")).toBeFalsy();
  });

  test("manually hide toast", () => {
    const toast = mount(<Toast />);

    Toast.show("Hello there", "success");
    expect(toast.state("show")).toBeTruthy();

    Toast.hide();
    expect(toast.state("show")).toBeFalsy();
  });
});
