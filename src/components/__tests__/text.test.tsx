import * as React from "react";
import { typography } from "../../theme";
import Text from "../Text";
import { Type } from "../../theme/typings/typography";
import { shallow } from "enzyme";

describe("Component: Tag", () => {
  test("snapshot", () => {
    const texts: JSX.Element[] = [];

    Object.keys(typography).forEach(size => {
      Object.keys(typography[size as keyof typeof typography]).forEach(type =>
        texts.push(
          <Text
            key={`${size}-${type}`}
            typography={
              typography[size as keyof typeof typography][type as keyof Type]
            }
          >
            Hello World
          </Text>
        )
      );
    });

    expect(shallow(<div>{texts}</div>)).toMatchSnapshot();
  });
});
