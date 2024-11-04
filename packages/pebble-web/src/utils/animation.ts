import { TransitionState } from "react-spring";

// TransitionPhase enum is not exported by react-spring package
// so we alias it as a type here
export type TransitionPhase = TransitionState["phase"];

export const animationConfig = {
  from: { opacity: 0, transform: "scale(0.95)" },
  enter: { opacity: 1, transform: "scale(1)" },
  leave: { opacity: 0, transform: "scale(0.95)", pointerEvents: "none" },
  config: (_show: boolean, _index: number, state: TransitionPhase) =>
    state === "leave" ? { duration: 80 } : { duration: 200 }
};
