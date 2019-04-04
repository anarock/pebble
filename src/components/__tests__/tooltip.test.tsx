import * as React from "react";
import Tooltip from "../Tooltip";
import Button from "../Button";
import sinon from "sinon";
import { mount } from "enzyme";

describe("Component: Tooltip", () => {
  test("onClose should be called", () => {
    const spy = sinon.spy();
    const tooltip = mount(
      <Tooltip
        onClose={spy}
        isOpen
        text="hello"
        label={({ ref }) => (
          <div ref={ref}>
            <Button type="link" onClick={() => {}}>
              Hover on me
            </Button>
          </div>
        )}
      />
    );
    tooltip
      .find(".pi.pi-close-circle-filled")
      .at(0)
      .simulate("click");
    expect(spy.calledOnce).toBeTruthy();
  });
});
