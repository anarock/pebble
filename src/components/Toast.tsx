import * as React from "react";
import { toastWrapper } from "./styles/Toast.styles";
import { colors } from "../theme";
import {
  ToastProps,
  ToastState,
  ToastType,
  ToastPosition
} from "./typings/Toast";
import { Transition, animated } from "react-spring";
import { cx } from "emotion";
import Mitt from "mitt";
import { animationConfig } from "../utils/animation";

const emitter = /*#__PURE__*/ new Mitt();

const _colors = {
  success: colors.emerald.base,
  error: colors.red.base
};

const customStyles = {
  [ToastPosition.TOP]: {
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

  [ToastPosition.TOP_LEFT]: {
    style: {
      top: 20,
      left: 20
    },

    transitions: {
      from: { transform: "translateX(-10px)" },
      enter: { transform: "translateX(0)" },
      leave: { transform: "translateX(-10px)" }
    }
  },

  [ToastPosition.TOP_RIGHT]: {
    style: {
      top: 20,
      right: 20
    },

    transitions: {
      from: { transform: "translateX(10px)" },
      enter: { transform: "translateX(0)" },
      leave: { transform: "translateX(10px)" }
    }
  },

  [ToastPosition.BOTTOM]: {
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

  [ToastPosition.BOTTOM_LEFT]: {
    style: {
      bottom: 20,
      left: 20
    },

    transitions: {
      from: { transform: "translateX(-10px)" },
      enter: { transform: "translateX(0)" },
      leave: { transform: "translateX(-10px)" }
    }
  },

  [ToastPosition.BOTTOM_RIGHT]: {
    style: {
      bottom: 20,
      right: 20
    },

    transitions: {
      from: { transform: "translateX(10px)" },
      enter: { transform: "translateX(0)" },
      leave: { transform: "translateX(10px)" }
    }
  }
};

class Toast extends React.PureComponent<ToastProps, ToastState> {
  static Position = ToastPosition;

  static show(
    text: string,
    type: ToastType,
    { time, position }: { time?: number; position: ToastPosition }
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
    position: ToastPosition.BOTTOM
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

    const iconClass = cx("pi", {
      "pi-radio-check-filled": this.state.type === "success",
      "pi-close-circle-filled": this.state.type === "error"
    });

    return (
      <Transition
        native
        items={this.state.show}
        from={{
          opacity: 0,
          ...customStyles[this.state.position].transitions.from
        }}
        enter={{
          opacity: 1,
          ...customStyles[this.state.position].transitions.enter
        }}
        leave={{
          opacity: 0,
          pointerEvents: "none",
          ...customStyles[this.state.position].transitions.leave
        }}
        config={animationConfig.config}
      >
        {show =>
          show &&
          (styles => (
            <animated.div
              className={cx(toastWrapper, this.props.className)}
              style={{
                backgroundColor: bColor,
                ...(styles as React.CSSProperties),
                ...customStyles[this.state.position].style
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
