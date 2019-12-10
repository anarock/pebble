import React from "react";
import { SetDifference } from "utility-types";
import { Colors } from "pebble-shared/dist/theme/typings/colors";
import { Interpolation } from "./emotionCustom";

export interface TagProps {
  label: React.ReactNode;
  color: SetDifference<keyof Colors, "white">;
  styles?: Interpolation;
  onClose?: () => void;
}
