import * as React from "react";
import { OptionProps } from "./typings/Option";
import Control from "./shared/Control";
import {
  activeRow,
  rowWrapper,
  selectedRow,
  labelWrap
} from "./styles/Options.styles";
import Ink from "react-ink";
import { colors } from "pebble-shared";

const defaultProps = {
  rightElement: ({
    isSelected,
    multiSelect
  }: {
    isSelected: boolean;
    multiSelect: boolean;
  }) => {
    const iconClass = [
      "pi",
      isSelected && "pi-checkbox-selected",
      !isSelected && "pi-checkbox-unselected"
    ]
      .filter(Boolean)
      .join(" ");
    return multiSelect ? (
      <i
        className={iconClass}
        css={{
          marginLeft: "10px",
          color: isSelected ? colors.violet.base : colors.gray.light,
          fontSize: "20px"
        }}
      />
    ) : null;
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
      rightElement,
      labelStyles,
      styles
    } = this.props;
    const _class = [
      rowWrapper,
      !!isActive && activeRow,
      !!isSelected && selectedRow,
      styles
    ];
    return (
      <Control
        {...this.props}
        checked={this.props.isSelected}
        type={this.props.multiSelect ? "checkbox" : "radio"}
        styles={_class}
      >
        {() => {
          return (
            <>
              <div css={[labelWrap, labelStyles]}>{label}</div>
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
