import * as React from "react";
import Rheostat from "rheostat";
import { cx } from "emotion";
import { typography } from "../theme";
import { SliderProps } from "./typings/Slider";
import { sliderHeader } from "./styles/Slider.styles";

const Slider: React.SFC<SliderProps> = ({
  className,
  large,
  title,
  disabled,
  valueLabelExtractor,
  values,
  onValuesUpdated,
  ...rest
}) => {
  const mainClass = cx(className, {
    __pebble__slider__disabled: disabled,
    __pebble__slider__large: large
  });

  let _values = Array.isArray(values) ? values.slice(0) : values || [];

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
            const { min, max, values } = args;
            if (
              Array.isArray(values) &&
              values[0] === rest.min &&
              values[1] === rest.max
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
