import * as React from "react";
import renderer from "react-test-renderer";
import Button from "../Button";
import Popper from "../Popper";
// import { mount } from "enzyme";

describe("Component: Popper", () => {
  test("snapshot", () => {
    const component = renderer.create(
      <Popper
        label={({ toggle }) => <Button onClick={toggle}>Click Me</Button>}
        placement="left"
        isOpen
      >
        {() => <div className="dropdown-content" />}
      </Popper>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Popper: Functionality", () => {
  // enzyme doesn't support React Context
  // test("click opens popper", () => {
  // 	const component = mount(<Popper
  // 		label={({ toggle }) => <Button className="button" onClick={toggle}>Click Me</Button>}
  // 		placement="left"
  // 		isOpen
  // 	>
  // 		{() => <div className="dropdown-content" />}
  // 	</Popper>);
  //
  // 	expect(component.find(".dropdown-content")).toHaveLength(0);
  // 	component.find("button").simulate("click");
  // 	expect(component.find(".dropdown-content")).toHaveLength(1);
  // })
});
