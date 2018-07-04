import { css } from "react-emotion";
import { typography } from "@src/theme";

export const controlViewStyle = css({
  color: "#1F314A",
  ...typography.normal.regular,
  cursor: "pointer",
  display: "flex",
  padding: "10px 0"
});

export const iconStyle = css({
  fontSize: 16,
  marginRight: 10,
  alignSelf: "center"
});
