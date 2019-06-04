import * as React from "react";
import Rheostat from "rheostat";
import { cx, injectGlobal } from "emotion";
import { typography } from "../theme";
import { SliderProps } from "./typings/Slider";
import { sliderHeader, rheostatOverrides } from "./styles/Slider.styles";

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
  valueLabelExtractor,
  values,
  onValuesUpdated,
  ...rest
}) => {
  overrideRheostatStyles();
  const mainClass = cx(className, {
    __pebble__slider__disabled: disabled,
    __pebble__slider__large: large
  });

  const _values = Array.isArray(values) ? values.slice(0) : values || [];

  if (Array.isArray(values)) {
    if (!values[0] && rest.min) {
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
        </div>
        <div style={large ? typography.l.regular : typography.normal.regular}>
          {valueLabelExtractor()}
        </div>
      </div>
      <Rheostat
        aria-valuemax={rest.max}
        aria-valuemin={rest.min}
        disabled={disabled}
        onValuesUpdated={
          onValuesUpdated &&
          (args => {
            const { min, max } = args;
            if (
              Array.isArray(args.values) &&
              args.values[0] === rest.min &&
              args.values[1] === rest.max
            ) {
              onValuesUpdated({ min, max, values: [] });
            } else {
              onValuesUpdated(args);
            }
          })
        }
        values={_values}
        {...rest}
      />
    </div>
  );
};

export default Slider;
