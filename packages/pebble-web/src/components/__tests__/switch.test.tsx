import * as React from "react";
import { shallow, mount } from "enzyme";
import sinon from "sinon";
import Switch from "../Switch";

describe("Component: Switch", () => {
  test("snapshot", () => {
    const switch1 = shallow(<Switch label="I am a switch" />);
    expect(switch1).toMatchSnapshot();

    const switch2 = shallow(<Switch label="I am a switch" />);
    expect(switch2).toMatchSnapshot();
  });

  test("onChange is triggered on click", () => {
    const spy = sinon.spy();

    const switch1 = mount(<Switch label="I am a switch" onChange={spy} />);
    switch1.find("input").simulate("change");
    expect(spy.calledOnce).toBeTruthy();
  });
});
