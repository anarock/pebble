import * as React from "react";
import {
  closeStyle,
  SidebarStyled,
  sidebarWrapperStyle
} from "@src/components/styles/Sidebar.styles";
import { SidebarProps } from "@src/components/typings/Sidebar";
import { Transition } from "react-spring";
import { css } from "react-emotion";
import Ink from "react-ink";

const SideBar: React.SFC<SidebarProps> = ({
  width,
  isOpen,
  children,
  onClose
}) => {
  const closeButtonLocation = css({
    marginRight: width + 20,
    marginTop: 20,
    float: "right" //todo fix this
  });

  const backdrop = (
    // @ts-ignore
    <Transition
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
    >
      {isOpen &&
        (styles => (
          <div style={styles} className={sidebarWrapperStyle}>
            <div className={closeButtonLocation}>
              <div className={closeStyle} onClick={onClose}>
                <i className="icon-close" />
                <Ink />
              </div>
            </div>
          </div>
        ))}
    </Transition>
  );

  return (
    <React.Fragment>
      {backdrop}
      <SidebarStyled width={width} isOpen={isOpen}>
        {children}
      </SidebarStyled>
    </React.Fragment>
  );
};

export default SideBar;
