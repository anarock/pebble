import * as React from "react";
import { Interpolation } from "@emotion/css";

export interface AlertProps {
  intent: "error" | "success";
  styles?: Interpolation;
  text: React.ReactChild;
}
