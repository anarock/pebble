import * as React from "react";
import { OptionProps } from "./typings/Option";
import Control from "./shared/Control";
import { cx, css } from "emotion";
import {
  activeRow,
  rowWrapper,
  selectedRow,
  labelWrap
} from "./styles/Options.styles";
import Ink from "react-ink";
import { colors } from "pebble-theme";

class Option extends React.Component<OptionProps> {
  static defaultProps: Partial<OptionProps> = {
    rightElement: ({ isSelected, multiSelect }) => {
      const iconClass = cx(
        "pi",
        {
          "pi-checkbox-selected": isSelected,
          "pi-checkbox-unselected": !isSelected
        },
        css({
          marginLeft: "10px",
          color: isSelected ? colors.violet.base : colors.gray.light
        })
      );
      return multiSelect ? <i className={iconClass} /> : null;
    }
  };

  render() {
    const {
      label,
      isActive,
      isSelected,
      rightElement,
      labelClassName,
      className
    } = this.props;
    const _class = cx(
      rowWrapper,
      {
        [activeRow]: isActive,
        [selectedRow]: isSelected
      },
      className
    );
    return (
      <Control
        {...this.props}
        checked={this.props.isSelected}
        type={this.props.multiSelect ? "checkbox" : "radio"}
        className={_class}
      >
        {() => {
          return (
            <>
              <div className={cx(labelWrap, labelClassName)}>{label}</div>
              {rightElement(this.props)}
              <Ink />
            </>
          );
        }}
      </Control>
    );
  }
}

export default Option;
