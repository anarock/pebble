import * as React from "react";
import {
  closeStyle,
  sidebarStyle,
  sidebarWrapperStyle
} from "./styles/Sidebar.styles";
import { SidebarProps } from "./typings/Sidebar";
import { Transition, animated } from "react-spring/renderprops.cjs";
import Ink from "react-ink";
import css from "@emotion/css";
import { disableScrollY } from "../theme/styles";
import { animationConfig } from "../utils/animation";

const transitionProps = {
  from: { opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 }
};

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
    const _sidebarOverride = css({
      width,
      transform: isOpen ? `translateX(0)` : `translateX(${width}px)`
    });
    const _sidebarStyle = [
      _sidebarOverride,
      sidebarStyle,
      {
        transform: isOpen ? `translateX(0)` : `translateX(100%)`
      }
    ];

    return (
      <React.Fragment>
        <Transition
          items={isOpen}
          {...transitionProps}
          config={animationConfig.config}
        >
          {show =>
            show &&
            (styles => (
              <animated.div
                style={styles}
                css={sidebarWrapperStyle}
                onClick={
                  onOutsideClick || closeOnOutsideClick
                    ? this.onOutsideClick
                    : undefined
                }
                data-testid="shadowArea"
              />
            ))
          }
        </Transition>

        <div css={_sidebarStyle}>
          <Transition items={isOpen} {...transitionProps}>
            {show =>
              show &&
              (styles => (
                <animated.div style={styles} css={closeStyle} onClick={onClose}>
                  <i className="pi pi-close" />
                  <Ink />
                </animated.div>
              ))
            }
          </Transition>
          {isOpen && (
            <div style={{ overflowY: "scroll", height: "100vh" }}>
              {children}
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default SideBar;
