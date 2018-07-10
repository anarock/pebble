import { colors, constants } from "../../theme";
import styled, { injectGlobal } from "react-emotion";

injectGlobal`
.slide-fade-enter {
  opacity: 0.01;
  margin-top: 5px;
}

.slide-fade-enter.slide-fade-enter-active {
  opacity: 1;
  margin-top: 10px;
}

.slide-fade-leave {
  opacity: 1;
}

.slide-fade-leave.slide-fade-leave-active {
  opacity: 0.01;
  margin-top: 5px;
}
`;

export const DropDownStyle = styled("div")({
  minWidth: 250,
  boxShadow: constants.boxShadow.xElevated,
  backgroundColor: colors.white.base,
  borderRadius: constants.borderRadius,
  position: "absolute",
  transition:
    "margin-top cubic-bezier(0.23, 1, 0.32, 1) .4s, opacity linear .2s",
  marginTop: 10,
  willChange: "opacity, margin-top",
  zIndex: 999
});
