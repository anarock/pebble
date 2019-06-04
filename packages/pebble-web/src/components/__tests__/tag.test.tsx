import * as React from "react";
import { mount, shallow } from "enzyme";
import sinon from "sinon";
import Tag from "../Tag";

describe("Component: Tag", () => {
  test("snapshot", () => {
    const tag = shallow(<Tag label="Anarock" color="violet" />);
    expect(tag).toMatchSnapshot();

    const tag2 = shallow(
      <Tag label="Anarock" color="emerald" onClose={() => {}} />
    );
    expect(tag2).toMatchSnapshot();
  });

  test("onClose is triggered correctly", () => {
    const spy = sinon.spy();

    const tag = mount(<Tag label="Anarock" color="emerald" onClose={spy} />);
    tag.find("i").simulate("click");
    expect(spy.calledOnce).toBeTruthy();
  });
});
