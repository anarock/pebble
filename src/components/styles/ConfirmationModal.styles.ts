import { css } from "emotion";
import { colors } from "../../theme";

export const modalContainer = css({
  background: "white",
  minWidth: "370px",
  alignSelf: "center",
  border: `1px solid ${colors.gray.light}`,
  borderRadius: "4px",
  padding: "30px"
});

export const buttonsContainer = css({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "30px"
});

export const iconClose = css({
  cursor: "pointer",
  right: "30px",
  fontSize: "14px",
  paddingTop: "2px",
  color: colors.gray.base,
  "&:hover": {
    color: colors.gray.darker
  }
});
