import { State, SpringConfig } from "react-spring";

const isProd = process.env.NODE_ENV === "production";

const [duration, durationLeave] = isProd ? [200, 80] : [1000, 500];

export const animationConfig = {
  from: { opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0, pointerEvents: "none" },
  config: (_a: boolean, motion: State): SpringConfig => ({
    duration: motion === "leave" ? durationLeave : duration
  })
};
