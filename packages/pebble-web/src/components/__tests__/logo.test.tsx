import * as React from "react";
import renderer from "react-test-renderer";
import Logo from "../Logo";

describe("Logo", () => {
  test("snapshot", () => {
    const logo = renderer.create(<Logo />);

    const tree = logo.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
