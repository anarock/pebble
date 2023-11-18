import * as React from "react";
import {
  State,
  Transition,
  TransitionProps
} from "react-spring/renderprops.cjs";
import { animationConfig } from "../../utils/animation";
import { Omit } from "utility-types";
import { AnimatedValue } from "react-spring";

type TransitionStyles = AnimatedValue<{
  opacity: number;
}>;

interface MountTransitionProps
  extends Omit<Omit<TransitionProps<boolean>, "items">, "children"> {
  visible: boolean;
  children: (
    styles: TransitionStyles,
    state: State,
    index: number
  ) => React.ReactNode;
}

const MountTransition: React.FunctionComponent<MountTransitionProps> = props => {
  return (
    <Transition native items={props.visible} {...animationConfig} {...props}>
      {(show, state, index) =>
        show &&
        (styles => props.children(styles as TransitionStyles, state, index))
      }
    </Transition>
  );
};

export default MountTransition;
