import { Props } from "rheostat";
import { Interpolation } from "./emotionCustom";

export interface SliderProps extends Props {
  styles?: Interpolation;
  large?: boolean;
  title: string;
  valueLabelExtractor: () => React.ReactNode;
}
