import { css } from "emotion";
import { colors, typography } from "../../theme";

export const headingText = css({
  ...typography.xl.bold,
  lineHeight: "24px"
});

export const modalContainer = css({
  background: "white",
  minWidth: "360px",
  alignSelf: "center",
  border: `1px solid ${colors.gray.light}`,
  borderRadius: "4px",
  padding: "30px"
});

export const buttonsContainer = css({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "40px"
});

export const iconClose = css({
  cursor: "pointer",
  right: "30px",
  fontSize: "14px",
  paddingTop: "7px",
  color: colors.gray.base,
  "&:hover": {
    color: colors.gray.darker
  }
});
