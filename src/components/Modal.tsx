import * as React from "react";
import { ModalProps } from "./typings/Modal";
import { modalContainer } from "./styles/Modal.styles";
import { cx } from "emotion";
import isBrowser from "is-in-browser";
import * as ReactDOM from "react-dom";
import MountTransition from "./shared/MountTransition";

class Modal extends React.PureComponent<ModalProps> {
  node = isBrowser ? document.createElement("div") : null;

  componentDidMount() {
    if (this.node) {
      document.body.appendChild(this.node);
    }
  }

  componentWillUnmount() {
    if (this.node) {
      document.body.removeChild(this.node);
    }
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
    const node = this.node;

    return ReactDOM.createPortal(
      <MountTransition visible={visible}>
        {transitionStyles => (
          <div
            style={{
              opacity: transitionStyles.opacity
            }}
            className={cx(modalContainer, className)}
          >
            <div
              style={{ transform: transitionStyles.transform, display: "flex" }}
            >
              {children}
            </div>
          </div>
        )}
      </MountTransition>,
      node as NonNullable<typeof node>
    );
  }
}

export default Modal;
