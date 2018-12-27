import { css } from "emotion";
import { constants, mixins } from "../../theme";
import { colors } from "pebble-theme";

export const rheostatOverrides = `
.rheostat {
  overflow: visible;
}

.rheostat-background {
  background-color: ${colors.violet.lightest};
  position: relative;
  border-radius: 2px;
  overflow: hidden;
  height: 4px;
  top: 0;
  width: 100%;
}

.rheostat-progress {
  background-color: ${colors.violet.base};
  position: absolute;
  height: 4px;
  border-radius: 2px;
  top: 0;
}

.rheostat-handle {
  background-color: ${colors.violet.base};
  border-radius: 50%;
  height: 20px;
  outline: none;
  z-index: 2;
  width: 20px;
  margin-left: -10px;
  top: -8px;
  border: 0;
  cursor: pointer;
  box-shadow: ${constants.boxShadow.xElevated};
}

.__pebble__slider__large .rheostat-handle {
  width: 24px;
  height: 24px;
  margin-left: -12px;
  top: -10px;
}

.rheostat-handle:hover {
  background-color: ${colors.violet.light};
}

.__pebble__slider__disabled .rheostat-handle {
  background-color: ${colors.violet.lighter};
  cursor: inherit;
}

.rheostat-horizontal {
  height: 4px;
}
`;

export const sliderHeader = css({
  ...mixins.flexSpaceBetween,
  marginBottom: 25,
  alignItems: "center",
  ".__pebble__slider__large &": {
    marginBottom: 35
  }
});
