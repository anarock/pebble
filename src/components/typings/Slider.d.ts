import * as Rheostat from "rheostat";

export interface SliderProps extends Rheostat.Props {
  className?: string;
  large?: boolean;
  title: string;
  valueLabelExtractor: () => JSX.Element | string | number;
}
