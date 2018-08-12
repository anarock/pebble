import * as React from "react";
import Option from "../Option";
import renderer from "react-test-renderer";

describe("Option component", () => {
  test("snapshot in selected state", () => {
    const checkbox = renderer.create(
      <Option
        isSelected
        onChange={() => {}}
        value="option"
        label="I am an option"
      />
    );

    const tree = checkbox.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("snapshot in active state", () => {
    const checkbox = renderer.create(
      <Option
        isActive
        onChange={() => {}}
        value="option"
        label="I am an option"
      />
    );

    const tree = checkbox.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("snapshot for multi select", () => {
    const checkbox = renderer.create(
      <Option
        multiSelect
        onChange={() => {}}
        value="option"
        label="I am an option"
      />
    );

    const tree = checkbox.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
