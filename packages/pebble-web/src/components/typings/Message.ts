import * as React from "react";
import { Interpolation } from "./emotionCustom";

export interface AlertProps {
  intent: "error" | "success";
  styles?: Interpolation;
  text: React.ReactChild;
}
