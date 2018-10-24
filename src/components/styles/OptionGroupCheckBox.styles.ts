import * as mixins from "../../theme/mixins";
import { css } from "emotion";

export const optionGroupCheckBoxWrap = css({
  maxHeight: "532px",
  position: "relative"
});

export const optionGroupCheckBoxButtonWrap = css({
  ...mixins.flexSpaceBetween,
  padding: 20
});
