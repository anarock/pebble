import * as React from "react";
import {
  State,
  Transition,
  TransitionProps
} from "react-spring/renderprops.cjs";
import { animationConfig } from "../../utils/animation";
import { Omit } from "utility-types";

interface MountTransitionProps
  extends Omit<Omit<TransitionProps<boolean>, "items">, "children"> {
  visible: boolean;
  children: (
    transitionStyles: React.CSSProperties,
    state: State,
    index: number
  ) => React.ReactNode;
}

const MountTransition: React.FunctionComponent<MountTransitionProps> = props => {
  return (
    <Transition items={props.visible} {...animationConfig} {...props}>
      {(show, state, index) =>
        show &&
        (transitionStyles =>
          props.children(transitionStyles as React.CSSProperties, state, index))
      }
    </Transition>
  );
};

export default MountTransition;
