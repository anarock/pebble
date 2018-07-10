import { Props } from "rheostat";

export interface SliderProps extends Props {
  className?: string;
  large?: boolean;
  title: string;
  valueLabelExtractor: () => JSX.Element | string | number;
}
