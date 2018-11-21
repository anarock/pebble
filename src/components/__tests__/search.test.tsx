import * as React from "react";
import { mount } from "enzyme";
import sinon from "sinon";
import Search from "../Search";
import { SearchProps } from "../typings/Search";

const noop = () => {};

function getComponent(spy = noop, props: Partial<SearchProps> = {}) {
  return <Search placeholder="Search" onChange={spy} {...props} />;
}

describe("Component: Search", () => {
  test("Search: query change triggers onChange", () => {
    const spy = sinon.spy();
    const search = mount(getComponent(spy));
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
