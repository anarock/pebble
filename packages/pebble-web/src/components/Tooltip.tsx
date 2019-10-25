import * as React from "react";
import Popper from "./Popper";
import { TooltipProps, TooltipState } from "./typings/Tooltip";
import { colors } from "pebble-shared";
import { popperStyle, textStyle } from "./styles/Tooltip.styles";

class Tooltip<T extends HTMLElement> extends React.PureComponent<
  TooltipProps<T>,
  TooltipState
> {
  state = {
    isOpen: !!this.props.isOpen
  };

  private defaultTooltip = () => (
    <span className={textStyle}>{this.props.text}</span>
  );

  labelRef: React.RefObject<T> = React.createRef();

  private showTooltip = () =>
    this.setState({
      isOpen: true
    });

  private hideTooltip = () =>
    this.setState({
      isOpen: false
    });

  private addListeners = () => {
    if (!this.props.disabled && this.labelRef.current) {
      this.labelRef.current.addEventListener("mouseenter", this.showTooltip);
      this.labelRef.current.addEventListener("mouseleave", this.hideTooltip);
    }
  };

  private removeListeners = () => {
    if (this.labelRef.current) {
      this.labelRef.current.removeEventListener("mouseenter", this.showTooltip);
      this.labelRef.current.removeEventListener("mouseleave", this.showTooltip);
    }
  };

  componentDidMount() {
    this.addListeners();
  }

  componentWillUnmount() {
    this.removeListeners();
  }

  componentDidUpdate(prevProps: TooltipProps<T>) {
    if (prevProps.disabled !== this.props.disabled) {
      this.props.disabled ? this.removeListeners() : this.addListeners();
    }
  }

  render() {
    const { placement, label, modifiers, isError } = this.props;

    return (
      <Popper
        label={() => label({ ref: this.labelRef })}
        placement={placement}
        controlled
        popperBackgroundColor={isError ? colors.red.base : colors.gray.darker}
        modifiers={modifiers}
        isOpen={this.props.isOpen || this.state.isOpen}
        popperClassName={popperStyle}
        closeOnOutsideClick={false}
      >
        {this.props.renderElement || this.defaultTooltip}
      </Popper>
    );
  }
}

export default Tooltip;
