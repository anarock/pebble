import { css } from "emotion";
import { typography } from "../../theme";

export const loaderWrapper = css({
  display: "flex",
  flex: 1,
  height: "100vh",
  alignItems: "center",
  justifyContent: "center"
});

export const googleLogoOption = css({
  ...typography.s.regular,
  padding: "0px 18px"
});
