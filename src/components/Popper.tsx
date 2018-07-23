import * as React from "react";
import { PopperProps, PopperState } from "./typings/Popper";
import { Manager, Reference, Popper } from "react-popper";
import { arrowStyle, popperStyle } from "./styles/Popper.styles";
import { colors } from "../theme";
import { cx } from "react-emotion";
import { Transition } from "react-spring";

export default class extends React.PureComponent<PopperProps, PopperState> {
  componentRef: React.RefObject<HTMLDivElement> = React.createRef();

  static defaultProps: Partial<PopperProps> = {
    placement: "bottom",
    popperBackgroundColor: colors.white.base,
    closeOnClickOutside: true
  };

  state: PopperState = {
    isOpen: this.props.isOpen
  };

  private toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  private handleOutsideClick = (e: MouseEvent) => {
    if (
      this.componentRef &&
      !this.componentRef.current.contains(e.target as HTMLDivElement)
    ) {
      this.toggle();
    }
  };

  componentDidMount() {
    if (this.props.closeOnClickOutside) {
      document.addEventListener("mousedown", this.handleOutsideClick);
      document.addEventListener("touchstart", this.handleOutsideClick);
    }
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleOutsideClick);
    document.removeEventListener("touchstart", this.handleOutsideClick);
  }

  render() {
    const {
      label,
      popperBackgroundColor,
      children,
      controlled,
      isOpen,
      popperClassName,
      ...props
    } = this.props;

    const _isPopperOpen = controlled ? isOpen : this.state.isOpen;

    return (
      <div ref={this.componentRef}>
        <Manager>
          <Reference>
            {({ ref }) => (
              <div ref={ref}>
                {typeof label === "function"
                  ? label({ toggle: this.toggle, isOpen: this.state.isOpen })
                  : label}
              </div>
            )}
          </Reference>
          <Transition
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
          >
            {_isPopperOpen &&
              (styles => (
                <Popper {...props}>
                  {({ ref, style, placement, arrowProps }) => (
                    <div
                      className={cx(popperStyle, popperClassName)}
                      ref={ref}
                      style={{
                        ...styles,
                        ...style,
                        backgroundColor: popperBackgroundColor
                      }}
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
                  )}
                </Popper>
              ))}
          </Transition>
        </Manager>
      </div>
    );
  }
}
