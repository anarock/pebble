import * as mixins from "../../theme/mixins";
import { css } from "emotion";
import {
  optionWrapperMaxHeight,
  searchBoxHeight,
  initialPadding,
  onScrollPadding,
  searchBoxHeightWithMessage
} from "./OptionGroup.styles";
import { smallButtonHeight } from "./Button.styles";
import { colors } from "pebble-shared";
export const optionGroupCheckBoxButtonWrapPadding = 20;
export const optionGroupCheckBoxButtonWrapPaddingTop = 10;

export const optionGroupCheckBoxWrapperHeight =
  optionWrapperMaxHeight +
  2 * (initialPadding - onScrollPadding) +
  optionGroupCheckBoxButtonWrapPadding +
  optionGroupCheckBoxButtonWrapPaddingTop +
  smallButtonHeight;

export const optionGroupCheckBoxWrap = css({
  maxHeight: optionGroupCheckBoxWrapperHeight + searchBoxHeight,
  position: "relative"
});

export const optionGroupCheckBoxWrapWithMessage = css({
  maxHeight: optionGroupCheckBoxWrapperHeight + searchBoxHeightWithMessage
});

export const optionGroupCheckBoxButtonWrap = css({
  ...mixins.flexSpaceBetween,
  gap: 60,
  padding: optionGroupCheckBoxButtonWrapPadding,
  paddingTop: optionGroupCheckBoxButtonWrapPaddingTop,
  backgroundColor: colors.white.base
});
