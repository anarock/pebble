import * as React from "react";
import { ModalProps } from "./typings/Modal";
import { modalContainer } from "./styles/Modal.styles";
import { cx } from "emotion";
import isBrowser from "is-in-browser";
import * as ReactDOM from "react-dom";
import { Transition } from "react-spring";
import { animationConfig } from "../utils/animation";

class Modal extends React.PureComponent<ModalProps> {
  node: HTMLDivElement;

  componentDidMount() {
    this.node = document.createElement("div");
    document.body.appendChild(this.node);
  }

  componentWillUnmount() {
    document.body.removeChild(this.node);
  }

  componentDidUpdate(prevProps: ModalProps) {
    if (prevProps.visible === this.props.visible) return;

    if (this.props.visible) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "";
    }
  }

  render(): React.ReactNode {
    if (!isBrowser) return null;

    const { children, visible, className } = this.props;

    if (!this.node) {
      this.node = document.createElement("div");
    }

    return ReactDOM.createPortal(
      <Transition items={visible} {...animationConfig}>
        {show =>
          show &&
          (styles => (
            <div
              style={{
                opacity: styles.opacity
              }}
              className={cx(modalContainer, "ReactPortal", className)}
            >
              <div style={{ transform: styles.transform, display: "flex" }}>
                {children}
              </div>
            </div>
          ))
        }
      </Transition>,
      this.node
    );
  }
}

export default Modal;
