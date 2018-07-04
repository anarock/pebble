import { colors, typography, constants } from "@src/theme";
import { default as styled, css } from "react-emotion";

export const headStyle = css({
  display: "flex",
  flexDirection: "row",
  position: "relative"
});

export const headSection = css({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  "> div": {
    fontSize: 14
  }
});

export const Heading = styled("div")(
  {
    ...typography.normal.regular
  },
  (props: { isSelected: boolean; isDisabled }) => ({
    color: props.isSelected
      ? colors.violet.base
      : props.isDisabled
        ? colors.gray.base
        : undefined
  })
);

export const dotStyle = css({
  height: 20,
  width: 20,
  backgroundColor: colors.gray.base,
  borderRadius: "50%",
  border: "5px solid white",
  marginTop: 18,
  position: "relative",
  zIndex: 9
});

export const activeDotStyle = css({
  backgroundColor: colors.violet.base
});

export const contentWrapper = css({
  backgroundColor: colors.white.base,
  marginTop: -10,
  borderRadius: constants.borderRadius,
  boxShadow: constants.boxShadow.elevated,
  padding: 60
});

export const footerStyle = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 50
});

export const stepperLineStyle = css({
  height: 2,
  bottom: 9,
  position: "absolute",
  transition: "width 100ms ease-out",
  backgroundColor: colors.violet.base
});
