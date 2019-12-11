import css from "@emotion/css";
import { colors } from "pebble-shared";
import { typography } from "../../theme";

export const selectedTabStyle = css({
  borderBottom: `2px solid ${colors.violet.base}`,
  color: colors.violet.base
});

export const tabStyle = css({
  padding: "10px 20px 20px",
  cursor: "pointer",
  ...typography.s.bold
});

export const tabsWrap = css({
  display: "flex",
  justifyContent: "space-around",
  overflow: "auto",
  borderBottom: `1px solid ${colors.gray.lighter}`,
  background: colors.white.base
});
