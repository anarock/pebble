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

const SideBar: React.SFC<SidebarProps> = ({
  width,
  isOpen,
  children,
  onClose
}) => {
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
        {children}
      </div>
    </React.Fragment>
  );
};

export default SideBar;
