import * as React from "react";
import { ModalProps } from "./typings/Modal";
import { modalContainer } from "./styles/Modal.styles";
import { cx } from "emotion";
import isBrowser from "is-in-browser";
import * as ReactDOM from "react-dom";
import MountTransition from "./shared/MountTransition";
import { animated } from "react-spring";

class Modal extends React.PureComponent<ModalProps> {
  private node = isBrowser ? document.createElement("div") : null;

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

    const { children, visible, backDropClassName, modalClassName } = this.props;
    const node = this.node;

    return ReactDOM.createPortal(
      // tslint:disable-next-line:jsx-wrap-multiline
      <MountTransition visible={visible}>
        {transitionStyles => (
          <animated.div
            style={{
              opacity: transitionStyles.opacity
            }}
            className={cx(modalContainer, backDropClassName)}
          >
            <animated.div
              style={{
                transform: transitionStyles.transform
              }}
              className={modalClassName}
            >
              {children}
            </animated.div>
          </animated.div>
        )}
      </MountTransition>,
      node as NonNullable<typeof node>
    );
  }
}

export default Modal;
