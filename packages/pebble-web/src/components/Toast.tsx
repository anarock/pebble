import * as React from "react";
import { toastWrapper } from "./styles/Toast.styles";
import { colors } from "pebble-shared";
import {
  ToastProps,
  ToastState,
  ToastType,
  ToastPosition
} from "./typings/Toast";
import { Transition, animated } from "react-spring/renderprops.cjs";

import mitt from "mitt";
import { animationConfig } from "../utils/animation";

const emitter = /*#__PURE__*/ mitt();

export const _colors = {
  success: colors.emerald.base,
  error: colors.red.base
};

const toastTransitionsLeft = {
  from: { transform: "translateX(-10px)" },
  enter: { transform: "translateX(0)" },
  leave: { transform: "translateX(-10px)" }
};

const toastTransitionsRight = {
  from: { transform: "translateX(10px)" },
  enter: { transform: "translateX(0)" },
  leave: { transform: "translateX(10px)" }
};

const customStyles = {
  TOP: {
    style: {
      top: 20,
      left: "50%"
    },

    transitions: {
      from: { transform: "translateX(-50%) translateY(-10px)" },
      enter: { transform: "translateX(-50%) translateY(0)" },
      leave: { transform: "translateX(-50%) translateY(-10px)" }
    }
  },

  TOP_LEFT: {
    style: {
      top: 20,
      left: 20
    },

    transitions: toastTransitionsLeft
  },

  TOP_RIGHT: {
    style: {
      top: 20,
      right: 20
    },

    transitions: toastTransitionsRight
  },

  BOTTOM: {
    style: {
      bottom: 20,
      left: "50%"
    },

    transitions: {
      from: { transform: "translateX(-50%) translateY(10px)" },
      enter: { transform: "translateX(-50%) translateY(0)" },
      leave: { transform: "translateX(-50%) translateY(10px)" }
    }
  },

  BOTTOM_LEFT: {
    style: {
      bottom: 20,
      left: 20
    },

    transitions: toastTransitionsLeft
  },

  BOTTOM_RIGHT: {
    style: {
      bottom: 20,
      right: 20
    },

    transitions: toastTransitionsRight
  }
};

class Toast extends React.PureComponent<ToastProps, ToastState> {
  static show(
    text: string,
    type: ToastType,
    { time, position }: { time?: number; position?: ToastPosition } = {}
  ) {
    emitter.emit("showToast", { text, type, time, position });
  }

  showTimer?: number | null;

  static hide() {
    emitter.emit("hideToast");
  }

  state: ToastState = {
    text: "",
    type: "success",
    show: false,
    position: "BOTTOM"
  };

  componentDidMount() {
    emitter.on("showToast", this.show);
    emitter.on("hideToast", this.hide);
  }

  componentWillUnmount() {
    emitter.off("showToast", this.show);
    emitter.off("hideToast", this.hide);
  }

  private show = ({
    text,
    type = "success",
    position,
    time
  }: Partial<ToastState> & {
    text: string;
    time?: number;
    position: ToastPosition;
  }) => {
    this.setState({
      text,
      type,
      position,
      show: true
    });

    if (this.showTimer) {
      clearTimeout(this.showTimer);
      this.showTimer = null;
    }

    this.showTimer = window.setTimeout(
      () =>
        this.setState({
          show: false
        }),
      time ? time : this.props.defaultTime || 5000
    );
  };

  private hide = () => this.setState({ show: false });

  render() {
    const bColor = _colors[this.state.type];

    const iconClass = `pi ${(this.state.type === "success" &&
      "pi-radio-check-filled") ||
      ""} ${this.state.type === "error" && "pi-close-circle-filled"}`;

    const position =
      this.state.position || this.props.defaultPosition || "BOTTOM";

    return (
      <Transition
        native
        items={this.state.show}
        key={position}
        from={{
          opacity: 0,
          ...customStyles[position].transitions.from
        }}
        enter={{
          opacity: 1,
          ...customStyles[position].transitions.enter
        }}
        leave={{
          opacity: 0,
          pointerEvents: "none",
          ...customStyles[position].transitions.leave
        }}
        config={animationConfig.config}
      >
        {show =>
          show &&
          (styles => (
            <animated.div
              css={[toastWrapper, this.props.styles]}
              style={{
                backgroundColor: bColor,
                ...(styles as React.CSSProperties),
                ...customStyles[position].style
              }}
            >
              <i className={iconClass} />
              {this.state.text}
            </animated.div>
          ))
        }
      </Transition>
    );
  }
}

export default Toast;
