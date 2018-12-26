import { SpringConfig, State } from "react-spring";

export const animationConfig = {
  from: { opacity: 0, transform: "scale(0.95)" },
  enter: { opacity: 1, transform: "scale(1)" },
  leave: { opacity: 0, transform: "scale(0.95)", pointerEvents: "none" },
  config: ((_a: string, motion: State) =>
    motion === "leave"
      ? { duration: 0.1 }
      : {
          duration: 200
        }) as (key: string) => SpringConfig
};
