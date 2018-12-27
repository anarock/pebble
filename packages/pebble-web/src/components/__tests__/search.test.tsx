import * as React from "react";
import { mount } from "enzyme";
import sinon from "sinon";
import Search from "../Search";
import { SearchProps } from "../typings/Search";
import { Omit } from "utility-types";

const noop = () => {};

function getComponent(
  spy = noop,
  props: Omit<SearchProps, "onChange" | "placeholder" | "type">
) {
  return <Search type="small" placeholder="Search" onChange={spy} {...props} />;
}

describe("Component: Search", () => {
  test("Search: query change triggers onChange", () => {
    const spy = sinon.spy();
    const search = mount(getComponent(spy, { value: "" }));
    search.find("input").simulate("change", {
      target: {
        value: "hello"
      }
    });
    expect(spy.calledWith("hello")).toBeTruthy();
  });

  test("Search: clearing query triggers onChange", () => {
    const spy = sinon.spy();
    const search = mount(getComponent(spy, { value: "hello" }));
    search.find(".pi-close").simulate("click");
    expect(spy.calledWith("")).toBeTruthy();
  });
});
