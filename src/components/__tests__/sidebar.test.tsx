import * as React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import SideBar from "../Sidebar";
import sinon from "sinon";
import combos from "combos";

function noop() {}

describe("Sidebar snapshot tests", () => {
  const _combos = combos({
    isOpen: [true, false],
    width: [200, 300],
    closeOnOutsideClick: [true, false, undefined]
  });

  test.each(_combos)("%o", props => {
    const sidebar = renderer.create(
      <SideBar {...props} onClose={noop}>
        Sidebar
      </SideBar>
    );

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
    expect(spy.calledOnce);
  });
});
