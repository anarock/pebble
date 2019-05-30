import renderer from "react-test-renderer";
import Loader from "../Loader";
import * as React from "react";

describe("Loader", () => {
  test("snapshot", () => {
    const logo = renderer.create(<Loader />);

    const tree = logo.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
