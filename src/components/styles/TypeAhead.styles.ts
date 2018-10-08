import { css } from "emotion";
import { constants } from "../../theme";

export const wrapper = css({
  position: "relative"
});

export const optionsWrapper = css({
  width: "100%",
  position: "absolute",
  zIndex: 999,
  boxShadow: constants.boxShadow.elevated
});
