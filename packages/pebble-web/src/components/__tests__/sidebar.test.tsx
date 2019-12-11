import React, { useState } from "react";
import "@testing-library/jest-dom/extend-expect";
import {
  render,
  fireEvent,
  waitForElement,
  waitForElementToBeRemoved
} from "@testing-library/react";
import SideBar from "../Sidebar";
import Button from "../Button";
import css from "@emotion/css";

const wrapperStyle = css({
  width: "100%",
  height: 1000,
  backgroundColor: "white"
});

function SidebarComponent({
  closeOnOutsideClick
}: {
  closeOnOutsideClick: boolean;
}) {
  const [open, toggleSidebar] = useState(false);

  return (
    <>
      <Button onClick={() => toggleSidebar(true)}>Open Sidebar</Button>
      <SideBar
        onClose={() => toggleSidebar(false)}
        width={400}
        isOpen={open}
        closeOnOutsideClick={closeOnOutsideClick}
      >
        <div css={wrapperStyle}>Sidebar Content</div>
      </SideBar>
    </>
  );
}

describe("Sidebar", () => {
  test("should open sidebar and not close on outside click", async () => {
    jest.useFakeTimers();
    const { getByText, getByTestId } = render(
      <SidebarComponent closeOnOutsideClick={false} />
    );

    fireEvent.click(getByText("Open Sidebar"));
    jest.runOnlyPendingTimers();
    await waitForElement(() => getByText("Sidebar Content"));
    fireEvent.click(getByTestId("shadowArea"));
    jest.runOnlyPendingTimers();
    await waitForElement(() => getByText("Sidebar Content"));
  });

  test("should open sidebar and close on outside click", async () => {
    jest.useFakeTimers();
    const { getByText, getByTestId } = render(
      <SidebarComponent closeOnOutsideClick />
    );

    fireEvent.click(getByText("Open Sidebar"));
    jest.runOnlyPendingTimers();
    await waitForElement(() => getByText("Sidebar Content"));
    const waitToBeRemovedPromise = waitForElementToBeRemoved(() =>
      getByText("Sidebar Content")
    );
    fireEvent.click(getByTestId("shadowArea"));
    jest.runOnlyPendingTimers();
    await waitToBeRemovedPromise;
  });
});
