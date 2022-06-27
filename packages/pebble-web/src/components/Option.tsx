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
import { colors } from "pebble-shared";

const defaultProps = {
  rightElement: <T extends unknown>({
    isSelected,
    multiSelect,
    indeterminate,
    iconClassName
  }: OptionProps<T>) => {
    const iconClass = cx(
      "pi",
      {
        "pi-checkbox-selected": !indeterminate && isSelected,
        "pi-checkbox-unselected": !indeterminate && !isSelected,
        "pi-checkbox-indeterminate": !!indeterminate
      },
      css({
        marginLeft: "10px",
        color:
          indeterminate || isSelected ? colors.violet.base : colors.gray.light,
        fontSize: "20px"
      })
    );
    return multiSelect ? <i className={cx(iconClass, iconClassName)} /> : null;
  }
};

class Option<OptionType> extends React.Component<
  OptionProps<OptionType> & Required<typeof defaultProps>
> {
  static defaultProps = defaultProps;
  render() {
    const {
      label,
      isActive,
      isSelected,
      leftElement,
      rightElement,
      labelClassName,
      className
    } = this.props;
    const _class = cx(
      rowWrapper,
      {
        [activeRow]: !!isActive,
        [selectedRow]: !!isSelected
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
              {leftElement && leftElement(this.props)}
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
