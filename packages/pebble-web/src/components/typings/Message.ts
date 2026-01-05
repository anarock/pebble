import * as React from "react";

export interface AlertProps {
  intent: "error" | "success";
  className?: string;
  text: React.ReactChild;
  dataTestId?: string;
}
