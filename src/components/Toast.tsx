import * as React from "react";
import { toastWrapper } from "./styles/Toast.styles";
import { colors } from "../theme";
import { ToastState, ToastType } from "./typings/Toast";
import { Transition } from "react-spring";
import { cx } from "react-emotion";

const _colors = {
  success: colors.emerald.base,
  error: colors.red.base
};

class Toast extends React.PureComponent<{}, ToastState> {
  state = {
    text: "",
    type: "success",
    show: false
  };

  public show = (text: string, type: ToastType = "success") => {
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

  render() {
    const bColor = _colors[this.state.type];

    const iconClass = cx({
      "icon-radio-check-filled": this.state.type === "success",
      "icon-close-circle-filled": this.state.type === "error"
    });

    return (
      // @ts-ignore
      <Transition
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {this.state.show &&
          (styles => (
            <div
              className={toastWrapper}
              style={{ backgroundColor: bColor, ...styles }}
            >
              <i className={iconClass} />
              {this.state.text}
            </div>
          ))}
      </Transition>
    );
  }
}

export default Toast;
