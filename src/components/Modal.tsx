import * as React from "react";
import { ModalProps } from "./typings/Modal";
import { modalContainer } from "./styles/Modal.styles";
import { cx } from "react-emotion";

class Modal extends React.PureComponent<ModalProps> {
  componentDidUpdate(prevProps: ModalProps) {
    if (prevProps.visible === this.props.visible) return;

    if (this.props.visible) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "";
    }
  }

  render() {
    const { children, visible, className } = this.props;

    return visible ? (
      <div className={cx(modalContainer, className)}>{children}</div>
    ) : null;
  }
}

export default Modal;
