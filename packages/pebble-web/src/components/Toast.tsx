import * as React from "react";
import { toastWrapper } from "./styles/Toast.styles";
import { colors } from "pebble-theme";
import { ToastProps, ToastState, ToastType } from "./typings/Toast";
import { Transition, animated } from "react-spring";
import { cx } from "emotion";
import Mitt from "mitt";
import { animationConfig } from "../utils/animation";

const emitter = /*#__PURE__*/ new Mitt();

const _colors = {
  success: colors.emerald.base,
  error: colors.red.base
};

class Toast extends React.PureComponent<ToastProps, ToastState> {
  static show(text: string, type: ToastType, time?: number) {
    emitter.emit("showToast", { text, type, time });
  }

  showTimer?: number | null;

  static hide() {
    emitter.emit("hideToast");
  }

  state: ToastState = {
    text: "",
    type: "success",
    show: false
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
    time
  }: Partial<ToastState> & { text: string; time?: number }) => {
    this.setState({
      text,
      type,
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
        from={{ opacity: 0, transform: "translateX(-50%) translateY(10px)" }}
        enter={{ opacity: 1, transform: "translateX(-50%) translateY(0)" }}
        leave={{
          opacity: 0,
          transform: "translateX(-50%) translateY(10px)",
          pointerEvents: "none"
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
                ...(styles as React.CSSProperties)
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
