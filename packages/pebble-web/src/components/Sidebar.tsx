import * as React from "react";
import {
  closeStyle,
  sidebarStyle,
  sidebarWrapperStyle
} from "./styles/Sidebar.styles";
import { SidebarProps } from "./typings/Sidebar";
import { animated } from "react-spring/renderprops.cjs";
import Ink from "react-ink";
import { css, cx } from "emotion";
import { disableScrollY } from "../theme/styles";
import MountTransition from "./shared/MountTransition";

class SideBar extends React.PureComponent<SidebarProps> {
  static defaultProps: Partial<SidebarProps> = {
    closeOnOutsideClick: true
  };

  componentDidMount() {
    if (this.props.isOpen) document.body.classList.add(disableScrollY);
  }

  componentDidUpdate() {
    if (this.props.isOpen) {
      document.body.classList.add(disableScrollY);
    } else {
      document.body.classList.remove(disableScrollY);
    }
  }

  componentWillUnmount() {
    if (this.props.isOpen) {
      document.body.classList.remove(disableScrollY);
    }
  }

  onOutsideClick = () => {
    const { onOutsideClick, closeOnOutsideClick, onClose } = this.props;
    if (closeOnOutsideClick) {
      onClose();
    }
    if (onOutsideClick) onOutsideClick();
  };

  render() {
    const {
      width,
      isOpen,
      children,
      onClose,
      onOutsideClick,
      closeOnOutsideClick
    } = this.props;
    const _sidebarStyle = cx(sidebarStyle, css({ width }));

    return (
      <MountTransition visible={isOpen}>
        {transitionStyles => (
          <>
            <animated.div
              style={{ opacity: transitionStyles.opacity }}
              className={sidebarWrapperStyle}
              onClick={
                onOutsideClick || closeOnOutsideClick
                  ? this.onOutsideClick
                  : undefined
              }
              data-testid="shadowArea"
            />

            <animated.div
              className={_sidebarStyle}
              style={{
                opacity: transitionStyles.opacity,
                transform: transitionStyles.opacity
                  .interpolate({ range: [0, 1], output: [100, 0] })
                  .interpolate(tx => `translate(${tx}%)`)
              }}
            >
              <div className={closeStyle} onClick={onClose}>
                <i className="pi pi-close" />
                <Ink />
              </div>

              <div style={{ overflowY: "auto", height: "100%" }}>
                {children}
              </div>
            </animated.div>
          </>
        )}
      </MountTransition>
    );
  }
}

export default SideBar;
