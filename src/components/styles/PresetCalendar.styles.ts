import { css } from "emotion";
import { colors, constants, mixins } from "../../theme";

const selectedTag = {
  background: colors.violet.lightest,
  color: colors.violet.base
};

export const quickDateTags = css({
  padding: "10px 15px",
  marginRight: 5,
  fontSize: 14,
  borderRadius: constants.borderRadius,
  cursor: "pointer",
  ":hover": selectedTag
});

export const customChevronIcon = css({
  fontSize: 10,
  display: "inline-flex",
  marginLeft: 5,
  color: colors.gray.base,
  transition: "transform 0.5s"
});

export const openIcon = css({ transform: "rotate(180deg)" });

export const customSelected = css(selectedTag);

export const popperWrap = css({ padding: 20, minWidth: 416 });

export const presetCalWrap = css({ padding: "10px 0 0 0" });

export const popperContent = css({ ...mixins.flexSpaceBetween });
