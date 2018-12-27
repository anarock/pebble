import * as React from "react";
import Popper from "./Popper";
import { TooltipProps, TooltipState } from "./typings/Tooltip";
import { colors } from "pebble-theme";
import { popperStyle, textStyle } from "./styles/Tooltip.styles";

class Tooltip extends React.PureComponent<TooltipProps, TooltipState> {
  state = {
    isOpen: !!this.props.isOpen
  };

  // tslint:disable-next-line no-any
  labelRef: React.RefObject<any> = React.createRef();

  private showTooltip = () =>
    this.setState({
      isOpen: true
    });

  private hideTooltip = () =>
    this.setState({
      isOpen: false
    });

  private addListeners = () => {
    if (!this.props.disabled) {
      this.labelRef.current.addEventListener("mouseenter", this.showTooltip);
      this.labelRef.current.addEventListener("mouseout", this.hideTooltip);
    }
  };

  private removeListeners = () => {
    this.labelRef.current.removeEventListener("mouseenter", this.showTooltip);
    this.labelRef.current.removeEventListener("mouseout", this.showTooltip);
  };

  componentDidMount() {
    this.addListeners();
  }

  componentWillUnmount() {
    this.removeListeners();
  }

  componentDidUpdate(prevProps: TooltipProps) {
    if (prevProps.disabled !== this.props.disabled) {
      this.props.disabled ? this.removeListeners() : this.addListeners();
    }
  }

  private getTooltip = () => (
    <span className={textStyle}>{this.props.text}</span>
  );

  render() {
    const { placement, label, modifiers, isError } = this.props;

    return (
      <Popper
        label={() => label({ ref: this.labelRef })}
        placement={placement}
        positionFixed
        controlled
        popperBackgroundColor={isError ? colors.red.base : colors.gray.darker}
        modifiers={modifiers}
        isOpen={this.props.isOpen || this.state.isOpen}
        popperClassName={popperStyle}
        closeOnOutsideClick={false}
      >
        {this.getTooltip}
      </Popper>
    );
  }
}

export default Tooltip;
