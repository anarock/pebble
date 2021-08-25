import * as React from "react";
import Rheostat from "rheostat";
import { cx, injectGlobal } from "emotion";
import { typography } from "../theme";
import { SliderProps } from "./typings/Slider";
import { sliderHeader, rheostatOverrides } from "./styles/Slider.styles";
import { colors } from "pebble-shared";

let rheostatStylesOverriden = false;
function overrideRheostatStyles() {
  if (rheostatStylesOverriden) return;
  injectGlobal(rheostatOverrides);
  rheostatStylesOverriden = true;
}

const Slider: React.FunctionComponent<SliderProps> = ({
  className,
  large,
  title,
  disabled,
  required,
  valueLabelExtractor,
  values,
  onValuesUpdated,
  ...rest
}) => {
  overrideRheostatStyles();
  const mainClass = cx(className, {
    __pebble__slider__disabled: !!disabled,
    __pebble__slider__large: !!large
  });

  const _values = Array.isArray(values) ? values.slice(0) : values || [];

  if (Array.isArray(values)) {
    if (!values[0] && rest.min !== undefined) {
      _values[0] = rest.min;
    }
    if (!values[1] && rest.max) {
      _values[1] = rest.max;
    }
  }

  return (
    <div className={mainClass}>
      <div className={sliderHeader}>
        <div style={large ? typography.normal.light : typography.normal.light}>
          {title}
          {required && <span style={{ color: colors.red.base }}>&nbsp;*</span>}
        </div>
        <div style={large ? typography.l.regular : typography.normal.regular}>
          {valueLabelExtractor
            ? valueLabelExtractor()
            : `${_values[0]} - ${_values[1]}`}
        </div>
      </div>
      <Rheostat
        aria-valuemax={rest.max}
        aria-valuemin={rest.min}
        disabled={disabled}
        onValuesUpdated={onValuesUpdated && (args => onValuesUpdated(args))}
        values={_values}
        {...rest}
      />
    </div>
  );
};

export default Slider;
