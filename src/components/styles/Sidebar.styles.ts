import styled, { css } from "react-emotion";
import { colors, constants } from "../../theme";

export const sidebarWrapperStyle = css({
  backgroundColor: "rgba(16,23,33,0.3)",
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 99
});

export const closeStyle = css({
  backgroundColor: colors.white.base,
  borderRadius: constants.borderRadius,
  height: 50,
  width: 50,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
  i: {
    fontSize: 25,
    color: colors.gray.darker
  }
});

export const SidebarStyled = styled("div")(
  {
    transition: `transform 200ms ${constants.animationCurve}`,
    backgroundColor: colors.white.base,
    position: "fixed",
    top: 0,
    bottom: 0,
    right: 0,
    willChange: "transform",
    zIndex: 99,
    overflowY: "scroll"
  },
  ({ width, isOpen }: any) => ({
    width,
    transform: isOpen ? `translateX(0)` : `translateX(${width}px)`
  })
);
