import { Props } from "rheostat";

export interface SliderProps extends Props {
  className?: string;
  large?: boolean;
  title: string;
  valueLabelExtractor: () => React.ReactNode;
}
