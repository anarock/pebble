import { css } from "emotion";

export const modalContainer = css({
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: "rgba(0,0,0,0.4)",
  display: "flex",
  justifyContent: "center",
  overflowY: "scroll",
  WebkitOverflowScrolling: "touch",
  zIndex: 99998
});

export const absoluteCenter = css({
  position: "absolute",
  top: "50%",
  left: "50%",
  margin: "auto",
  transform: "translate(-50%, -50%)"
});

export const flexCenter = css({
  display: "flex",
  alignItems: "center"
});
