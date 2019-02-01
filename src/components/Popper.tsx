import * as React from "react";
import { PopperProps, PopperState } from "./typings/Popper";
import { Manager, Reference, Popper } from "react-popper";
import { arrowStyle, popperStyle } from "./styles/Popper.styles";
import { colors } from "../theme";
import { cx } from "emotion";
import OutsideClick from "./OutsideClick";
import MountTransition from "./shared/MountTransition";

export default class extends React.PureComponent<PopperProps, PopperState> {
  static defaultProps: Partial<PopperProps> = {
    placement: "bottom",
    popperBackgroundColor: colors.white.base,
    closeOnOutsideClick: true
  };

  state: PopperState = {
    isOpen: !!this.props.isOpen
  };

  private toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const {
      label,
      popperBackgroundColor,
      children,
      controlled,
      isOpen,
      popperClassName,
      onOutsideClick,
      ...props
    } = this.props;

    const _isPopperOpen = controlled ? !!isOpen : this.state.isOpen;

    return (
      <OutsideClick
        onOutsideClick={() => {
          this.setState({
            isOpen: false
          });
          if (onOutsideClick) {
            onOutsideClick();
          }
        }}
        disabled={!_isPopperOpen}
      >
        <Manager>
          <Reference>
            {({ ref }) => (
              <div style={{ display: "inline-block" }} ref={ref}>
                {typeof label === "function"
                  ? label({ toggle: this.toggle, isOpen: this.state.isOpen })
                  : label}
              </div>
            )}
          </Reference>

          <MountTransition visible={_isPopperOpen}>
            {transitionStyles => (
              <Popper {...props} positionFixed>
                {({ ref, style, placement, arrowProps }) => {
                  const wrapperStyle = {
                    ...style,
                    ...transitionStyles,
                    backgroundColor: popperBackgroundColor,
                    transform: `${style.transform ||
                      ""} ${transitionStyles.transform || ""}`,
                    transformOrigin: `${arrowProps.style.left ||
                      0}px ${arrowProps.style.top || 0}px`
                  };

                  return (
                    <div
                      className={cx(popperStyle, popperClassName)}
                      ref={ref}
                      style={wrapperStyle}
                      data-placement={placement}
                    >
                      {children({
                        toggle: this.toggle,
                        isOpen: this.state.isOpen
                      })}
                      <div
                        className={arrowStyle}
                        ref={arrowProps.ref}
                        style={{
                          ...arrowProps.style,
                          color: popperBackgroundColor
                        }}
                        data-placement={placement}
                      >
                        ▶
                      </div>
                    </div>
                  );
                }}
              </Popper>
            )}
          </MountTransition>
        </Manager>
      </OutsideClick>
    );
  }
}
