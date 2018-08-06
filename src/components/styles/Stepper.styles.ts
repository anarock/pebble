import { colors, typography } from "../../theme";
import { css } from "emotion";

export const headStyle = css({
  display: "flex",
  flexDirection: "row",
  position: "relative"
});

export const headSection = css({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  "> div": {
    fontSize: 14
  }
});

export const headingStyle = css({ ...typography.normal.regular });

export const dotStyle = css({
  height: 20,
  width: 20,
  backgroundColor: colors.gray.base,
  borderRadius: "50%",
  border: "5px solid white",
  marginTop: 18,
  position: "relative",
  zIndex: 9
});

export const activeDotStyle = css({
  backgroundColor: colors.violet.base
});

export const contentWrapper = css({
  marginTop: -10
});

export const footerStyle = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 50
});

export const stepperLineStyle = css({
  height: 2,
  bottom: 9,
  position: "absolute",
  transition: "width 100ms ease-out",
  backgroundColor: colors.violet.base
});
