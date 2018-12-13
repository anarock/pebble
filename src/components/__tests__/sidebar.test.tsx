import * as React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import SideBar from "../Sidebar";
import sinon from "sinon";

function noop() {}

describe("Sidebar snapshot tests", () => {
  test("open", () => {
    const clock = sinon.useFakeTimers();

    const sidebar = renderer.create(
      <SideBar isOpen width={200} onClose={noop}>
        Sidebar
      </SideBar>
    );

    clock.tick(2000);

    const tree = sidebar.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("closed", () => {
    const clock = sinon.useFakeTimers();

    const sidebar = renderer.create(
      <SideBar isOpen={false} width={200} onClose={noop}>
        Sidebar
      </SideBar>
    );

    clock.tick(2000);

    const tree = sidebar.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Sidebar func tests", () => {
  test("onClose should be called", () => {
    const spy = sinon.spy();
    const sidebar = mount(
      <SideBar onClose={spy} isOpen width={300}>
        Sidebar
      </SideBar>
    );
    sidebar
      .find(".pi.pi-close")
      .at(0)
      .simulate("click");
    expect(spy.calledOnce).toBeTruthy();
  });
});
