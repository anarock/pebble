import * as mixins from "../../theme/mixins";
import { css } from "emotion";
import {
  optionWrapperMaxHeight,
  searchBoxHeight,
  initialPadding,
  onScrollPadding
} from "./OptionGroup.styles";
import { smallButtonHeight } from "./Button.styles";
import { colors } from "../../theme";
export const optionGroupCheckBoxButtonWrapPadding = 20;
export const optionGroupCheckBoxButtonWrapPaddingTop = 10;

export const optionGroupCheckBoxWrap = css({
  maxHeight: `${optionWrapperMaxHeight +
    searchBoxHeight +
    2 * (initialPadding - onScrollPadding) +
    optionGroupCheckBoxButtonWrapPadding +
    optionGroupCheckBoxButtonWrapPaddingTop +
    smallButtonHeight}`,
  position: "relative"
});

export const optionGroupCheckBoxButtonWrap = css({
  ...mixins.flexSpaceBetween,
  padding: `${optionGroupCheckBoxButtonWrapPadding}`,
  paddingTop: `${optionGroupCheckBoxButtonWrapPaddingTop}`,
  backgroundColor: colors.white.base
});
