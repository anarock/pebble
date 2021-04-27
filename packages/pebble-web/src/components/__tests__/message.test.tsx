import renderer from "react-test-renderer";
import Message from "../Message";
import * as React from "react";

describe("Message", () => {
  test("snapshot", () => {
    const mesage = renderer.create(
      <Message intent="success" text="Hello there" />
    );

    const tree = mesage.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
