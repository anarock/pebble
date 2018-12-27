import * as React from "react";
import renderer from "react-test-renderer";
import Button from "../Button";
import combos from "combos";
import sinon from "sinon";
import { mount } from "enzyme";
import Ink from "react-ink";

function noop() {}

describe("Button Combos test", () => {
  const _props = {
    disabled: [true, false],
    type: ["primary", "secondary", "alert", "link", "success"],
    showRipple: [true, false],
    loading: [true, false],
    large: [true, false]
  };

  const _combos = combos(_props);

  test.each(_combos)("%o", props => {
    const button = renderer.create(
      <Button {...props} onClick={noop}>
        Submit
      </Button>
    );

    const tree = button.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Button: functionality", () => {
  test("ripple is present and click is registered correctly", () => {
    const fake = sinon.fake();

    const button = mount(<Button onClick={fake}>Submit</Button>);

    button.find("button").simulate("click");

    expect(button.contains(<Ink />)).toBeTruthy();
    expect(fake.calledOnce).toBeTruthy();
  });

  test("no ripple present and no click registered in disabled state", () => {
    const fake = sinon.fake();
    const button = mount(
      <Button disabled onClick={fake}>
        Submit
      </Button>
    );

    expect(button.contains(<Ink />)).toBeFalsy();
    expect(fake.called).toBeFalsy();
  });

  test("no ripple present and no click registered in loading state", () => {
    const fake = sinon.fake();
    const button = mount(
      <Button loading onClick={fake}>
        Submit
      </Button>
    );

    expect(button.contains(<Ink />)).toBeFalsy();
    expect(fake.called).toBeFalsy();
  });
});
