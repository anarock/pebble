import { Interpolation as EmotionInterpolation } from "@emotion/css";

type Diff<T, U> = T extends U ? never : T;
export type Interpolation = Diff<EmotionInterpolation, string>;
