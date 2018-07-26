import * as React from "react";
import {
  closeStyle,
  sidebarStyle,
  sidebarWrapperStyle
} from "./styles/Sidebar.styles";
import { SidebarProps } from "./typings/Sidebar";
import { Transition, animated } from "react-spring";
import Ink from "react-ink";
import { css, cx } from "react-emotion";
import { disableScrollY } from "../theme/styles";
import OutsideClick from "./OutsideClick";

class SideBar extends React.PureComponent<SidebarProps> {
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

  render() {
    let { width, isOpen, children, onClose } = this.props;
    const _sidebarOverride = css({
      width,
      transform: isOpen ? `translateX(0)` : `translateX(${width}px)`
    });
    const _sidebarStyle = cx(
      _sidebarOverride,
      sidebarStyle,
      css({
        transform: isOpen ? `translateX(0)` : `translateX(100%)`
      })
    );
    const backdrop = (
      // @ts-ignore
      <Transition
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {isOpen &&
          (styles => (
            <animated.div style={styles} className={sidebarWrapperStyle} />
          ))}
      </Transition>
    );
    return (
      <React.Fragment>
        {backdrop}

        <OutsideClick onOutsideClick={this.props.onClose} disabled={!isOpen}>
          <div className={_sidebarStyle}>
            <Transition
              from={{ opacity: 0 }}
              enter={{ opacity: 1 }}
              leave={{ opacity: 0 }}
            >
              {isOpen &&
                (styles => (
                  <animated.div
                    style={styles}
                    className={closeStyle}
                    onClick={onClose}
                  >
                    <i className="icon-close" />
                    <Ink />
                  </animated.div>
                ))}
            </Transition>
            <div style={{ overflowY: "scroll", height: "100vh" }}>
              {children}
            </div>
          </div>
        </OutsideClick>
      </React.Fragment>
    );
  }
}

export default SideBar;
