import * as React from "react";
import { OptionProps } from "./typings/Option";
import Control from "./shared/Control";
import { cx } from "emotion";
import { activeRow, rowWrapper, selectedRow } from "./styles/Options.styles";
import Ink from "react-ink";
import { colors, mixins } from "../theme";
import { Component } from "react";

class Option extends Component<OptionProps> {
  static defaultProps: Partial<OptionProps> = {
    rightElement: ({ isSelected, multiSelect }) => {
      const iconClass = cx({
        "icon-checkbox-selected": isSelected,
        "icon-checkbox-unselected": !isSelected
      });
      return multiSelect ? (
        <i
          style={{
            color: isSelected ? colors.violet.base : colors.gray.light
          }}
          className={iconClass}
        />
      ) : null;
    }
  };

  render() {
    return (
      <Control
        {...this.props}
        checked={this.props.isSelected}
        type={this.props.multiSelect ? "checkbox" : "radio"}
      >
        {() => {
          const { label, isActive, isSelected, rightElement } = this.props;

          const _class = cx(rowWrapper, {
            [activeRow]: isActive,
            [selectedRow]: isSelected
          });

          return (
            <div className={_class} style={mixins.flexSpaceBetween}>
              {label} {rightElement(this.props)}
              <Ink />
            </div>
          );
        }}
      </Control>
    );
  }
}

export default Option;
