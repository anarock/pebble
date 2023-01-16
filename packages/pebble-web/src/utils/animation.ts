import { State } from "react-spring";

export const duration = {
  enter: 200,
  leave: 60
};

export const animationConfig = {
  from: { opacity: 0, transform: "scale(0.95)" },
  enter: { opacity: 1, transform: "scale(1)" },
  leave: { opacity: 0, transform: "scale(0.95)", pointerEvents: "none" },
  config: (_a: boolean, motion: State) =>
    motion === "leave"
      ? { duration: duration.leave }
      : { duration: duration.enter }
};
