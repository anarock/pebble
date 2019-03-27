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

function foo(position: ToastPosition) {
  const style: React.CSSProperties = {};

  const transitions: { [_: string]: React.CSSProperties } = {
    from: {},
    enter: {},
    leave: {}
  };

  // vertical positioning
  switch (position) {
    case ToastPosition.TOP_CENTER:
    case ToastPosition.TOP_LEFT:
    case ToastPosition.TOP_RIGHT:
      style.top = 20;

      break;

    case ToastPosition.BOTTOM_CENTER:
    case ToastPosition.BOTTOM_LEFT:
    case ToastPosition.BOTTOM_RIGHT:
      style.bottom = 20;
      break;
  }

  // horizontal positioning
  switch (position) {
    case ToastPosition.TOP_LEFT:
    case ToastPosition.BOTTOM_LEFT:
      style.left = 0;

      break;

    case ToastPosition.TOP_CENTER:
    case ToastPosition.BOTTOM_CENTER:
      style.left = "50%";
      style.transform = "translateX(-50%)";

      break;

    case ToastPosition.TOP_RIGHT:
    case ToastPosition.BOTTOM_RIGHT:
      style.right = 0;

      break;
  }

  // transitions
  switch (position) {
    case ToastPosition.TOP_CENTER:
      transitions.from.transform = "translateX(-50%) translateY(-10px)";
      transitions.enter.transform = "translateX(-50%) translateY(0)";
      transitions.leave.transform = "translateX(-50%) translateY(-10px)";

      break;

    case ToastPosition.BOTTOM_CENTER:
      transitions.from.transform = "translateX(-50%) translateY(10px)";
      transitions.enter.transform = "translateX(-50%) translateY(0)";
      transitions.leave.transform = "translateX(-50%) translateY(10px)";

      break;

    case ToastPosition.TOP_LEFT:
    case ToastPosition.BOTTOM_LEFT:
      transitions.from.transform = "translateX(-10px)";
      transitions.enter.transform = "translateX(0)";
      transitions.leave.transform = "translateX(-10px)";

      break;

    case ToastPosition.TOP_RIGHT:
    case ToastPosition.BOTTOM_RIGHT:
      transitions.from.transform = "translateX(10px)";
      transitions.enter.transform = "translateX(0)";
      transitions.leave.transform = "translateX(10px)";

      break;
  }

  return {
    style,
    transitions
  };
}

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
    position: ToastPosition.BOTTOM_CENTER
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

    const customStyles = foo(this.state.position);

    return (
      <Transition
        native
        items={this.state.show}
        from={{
          opacity: 0,
          ...customStyles.transitions.from
        }}
        enter={{
          opacity: 1,
          ...customStyles.transitions.enter
        }}
        leave={{
          opacity: 0,
          pointerEvents: "none",
          ...customStyles.transitions.leave
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
                ...customStyles.style
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
