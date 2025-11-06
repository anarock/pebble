import * as React from "react";
import {
  Transition,
  UseTransitionProps,
  SpringValues,
  TransitionComponentProps
} from "react-spring";
import {
  animationConfig,
  TransitionPhase,
  AnimationStyle
} from "../../utils/animation";

interface MountTransitionProps extends UseTransitionProps<boolean> {
  visible: boolean;
  children: (
    params: SpringValues<AnimationStyle>,
    state: TransitionPhase,
    index: number
  ) => React.ReactNode;
}

const MountTransition: React.FunctionComponent<MountTransitionProps> = props => {
  return (
    <Transition<boolean, TransitionComponentProps<boolean>>
      items={props.visible}
      {...animationConfig}
      {...props}
    >
      {(styles, show, { phase }, index) => {
        if (!show) return null;
        return props.children(
          styles as SpringValues<AnimationStyle>,
          phase,
          index
        );
      }}
    </Transition>
  );
};

export default MountTransition;
