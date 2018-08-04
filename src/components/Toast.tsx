import * as React from "react";
import { toastWrapper } from "./styles/Toast.styles";
import { colors } from "../theme";
import { ToastState, ToastType } from "./typings/Toast";
import { Transition, animated } from "react-spring";
import { cx } from "emotion";
import Mitt from "mitt";

const emitter = new Mitt();

const _colors = {
  success: colors.emerald.base,
  error: colors.red.base
};

class Toast extends React.PureComponent<{}, ToastState> {
  static show(text: string, type: ToastType) {
    emitter.emit("showToast", { text, type });
  }

  static hide() {
    emitter.emit("hideToast");
  }

  state = {
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

  private show = ({ text, type = "success" }: Partial<ToastState>) => {
    this.setState({
      text,
      type,
      show: true
    });

    setTimeout(
      () =>
        this.setState({
          show: false
        }),
      2000
    );
  };

  private hide = () => this.setState({ show: false });

  render() {
    const bColor = _colors[this.state.type];

    const iconClass = cx({
      "icon-radio-check-filled": this.state.type === "success",
      "icon-close-circle-filled": this.state.type === "error"
    });

    return (
      // @ts-ignore
      <Transition
        from={{ opacity: 0, transform: "translateX(-50%) translateY(10px)" }}
        enter={{ opacity: 1, transform: "translateX(-50%) translateY(0)" }}
        leave={{ opacity: 0, transform: "translateX(-50%) translateY(10px)" }}
      >
        {this.state.show &&
          (styles => (
            <animated.div
              className={toastWrapper}
              style={{ backgroundColor: bColor, ...styles }}
            >
              <i className={iconClass} />
              {this.state.text}
            </animated.div>
          ))}
      </Transition>
    );
  }
}

export default Toast;
