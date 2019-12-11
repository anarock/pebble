import { keyframes } from "@emotion/core";
import css from "@emotion/css";
import { mixins } from "../../theme";

const bounceDelay = /*#__PURE__*/ keyframes({
  "0%, 80%, 100%": {
    transform: "scale(0)"
  },
  "40%": {
    transform: "scale(1)"
  }
});

export const spinnerStyle = css({
  ...mixins.flexSpaceBetween,
  width: 70,
  "> div": {
    width: 18,
    height: 18,
    borderRadius: "100%",
    display: "inline-block",
    animation: `${bounceDelay} 1.4s infinite ease-in-out both`,
    "&:first-of-type": {
      animationDelay: "-0.32s"
    },
    "&:nth-of-type(2n)": {
      animationDelay: "-0.16s"
    }
  }
});
