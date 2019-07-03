import { css } from "emotion";

export const modalContainer = css({
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: "rgba(0,0,0,0.4)",
  overflowY: "scroll",
  WebkitOverflowScrolling: "touch",
  zIndex: 99998
});
