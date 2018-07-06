import * as React from "react";
import renderer from "react-test-renderer";
import Button from "@src/components/Button";
import combos from "combos";
import sinon from "sinon";
import { mount } from "enzyme";

function noop() {}

describe("Button Combos test", () => {
  const _props = {
    disabled: [true, false],
    type: ["primary", "secondary", "dropdown", "link"],
    showRipple: [true, false]
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
  test("click is registered correctly", () => {
    const fake = sinon.fake();

    const button = mount(<Button onClick={fake}>Submit</Button>);

    button.find("button").simulate("click");

    expect(fake.calledOnce).toBeTruthy();
  });
});
