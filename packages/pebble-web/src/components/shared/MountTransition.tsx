import * as React from "react";
import { Transition, UseTransitionProps } from "react-spring";
import { animationConfig, TransitionPhase } from "../../utils/animation";

interface MountTransitionProps extends UseTransitionProps<boolean> {
  visible: boolean;
  children: (
    params: React.CSSProperties,
    state: TransitionPhase,
    index: number
  ) => React.ReactNode;
}

const MountTransition: React.FunctionComponent<MountTransitionProps> = props => {
  return (
    <Transition items={props.visible} {...animationConfig} {...props}>
      {(styles, show, { phase }, index) => {
        if (!show) return null;
        return props.children(styles as React.CSSProperties, phase, index);
      }}
    </Transition>
  );
};

export default MountTransition;
