import * as React from "react";
import { PopperProps, PopperState } from "./typings/Popper";
import { Manager, Reference, Popper as Popper_ } from "react-popper";
import { arrowStyle, popperStyle } from "@src/components/styles/Popper.styles";
import { colors } from "@src/theme";

class Popper extends React.PureComponent<PopperProps, PopperState> {
  static defaultProps: Partial<PopperProps> = {
    placement: "bottom",
    popperBackgroundColor: colors.white.base
  };

  state: PopperState = {
    isOpen: this.props.isOpen
  };

  private toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { label, popperBackgroundColor, children, ...props } = this.props;

    return (
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
        <Popper_ {...props}>
          {({ ref, style, placement, arrowProps }) =>
            this.state.isOpen ? (
              <div
                className={popperStyle}
                ref={ref}
                style={{ ...style, backgroundColor: popperBackgroundColor }}
                data-placement={placement}
              >
                {children({ toggle: this.toggle, isOpen: this.state.isOpen })}
                <div
                  className={arrowStyle}
                  ref={arrowProps.ref}
                  style={{ ...arrowProps.style, color: popperBackgroundColor }}
                  data-placement={placement}
                >
                  ▶
                </div>
              </div>
            ) : null
          }
        </Popper_>
      </Manager>
    );
  }
}

export default Popper;
