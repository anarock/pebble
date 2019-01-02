import { css } from "emotion";
import { colors, constants } from "../../theme";

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
  color: colors.gray.base
});

export const customSelected = css(selectedTag);
