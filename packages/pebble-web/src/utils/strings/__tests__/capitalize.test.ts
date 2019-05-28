import { capitalize } from "../capitalize";

describe("Utility: capitalize", () => {
  test("should convert a string into capitalized string", () => {
    expect(capitalize("hello world")).toEqual("Hello World");
    expect(capitalize("hello")).toEqual("Hello");
    expect(capitalize("Hello")).toEqual("Hello");
  });
});
