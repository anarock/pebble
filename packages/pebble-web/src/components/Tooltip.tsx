import * as React from "react";
import Popper from "./Popper";
import { TooltipProps, TooltipState } from "./typings/Tooltip";
import { colors } from "pebble-shared";
import { popperStyle, textStyle } from "./styles/Tooltip.styles";
import { cx } from "emotion";

class Tooltip extends React.PureComponent<TooltipProps, TooltipState> {
  state = {
    isOpen: !!this.props.isOpen
  };

  private defaultTooltip = () => (
    <span className={textStyle}>{this.props.text}</span>
  );

  private showTooltip = () => {
    if (this.props.disabled) return;
    this.setState({
      isOpen: true
    });
  };

  private hideTooltip = () => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    const {
      placement,
      label,
      modifiers,
      isError,
      popperClassName
    } = this.props;

    return (
      <Popper
        label={() =>
          label({
            onMouseEnter: this.showTooltip,
            onMouseLeave: this.hideTooltip
          })
        }
        placement={placement}
        controlled
        popperBackgroundColor={isError ? colors.red.base : colors.gray.darker}
        modifiers={modifiers}
        isOpen={this.props.isOpen || this.state.isOpen}
        popperClassName={cx(popperStyle, popperClassName)}
        closeOnOutsideClick={false}
      >
        {this.props.renderElement || this.defaultTooltip}
      </Popper>
    );
  }
}

export default Tooltip;
