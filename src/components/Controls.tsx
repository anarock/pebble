import * as React from "react";
import { cx } from "emotion";
import { ControlsProps, ControlViewProps } from "./typings/Controls";
import { colors } from "../theme";
import { controlViewStyle, iconStyle } from "./styles/Controls.styles";
import { messageStyle } from "./styles/Input.styles";

const ControlView: React.SFC<ControlViewProps> = ({
  label,
  type,
  isSelected,
  className
}) => {
  const isRadio = type === "radio";
  const iconClass = cx(iconStyle, {
    "icon-radio": isRadio && !isSelected,
    "icon-radio-selected": isRadio && isSelected,
    "icon-checkbox-selected": !isRadio && isSelected,
    "icon-checkbox-unselected": !isRadio && !isSelected
  });

  return (
    <div className={cx(controlViewStyle, className)}>
      <i
        className={iconClass}
        style={{
          color: isSelected ? colors.violet.base : colors.gray.base
        }}
      />
      {label}
    </div>
  );
};

class Controls extends React.PureComponent<ControlsProps> {
  static ControlView = ControlView;

  static defaultProps: Partial<ControlsProps> = {
    type: "radio",
    renderElement: ({ item, isSelected }, { type, labelExtractor }) => (
      <ControlView
        type={type}
        label={labelExtractor(item)}
        isSelected={isSelected}
      />
    ),
    keyExtractor: item => item.id,
    labelExtractor: item => item.label || item.name
  };

  private handleClick = (id: string | number) => {
    const { onChange, allowToggle, selected } = this.props;

    let result;
    if (this.isRadio()) {
      if (allowToggle && id === selected) {
        id = null;
      }
      result = id;
    } else {
      const _selected = selected || [];
      // @ts-ignore
      let cloned = _selected.slice(0);
      // @ts-ignore
      const index = _selected.findIndex(datum => datum === id);
      if (index >= 0) {
        cloned.splice(index, 1);
      } else {
        cloned.push(id);
      }

      result = cloned;
    }

    onChange({
      selected: result
    });
  };

  private isRadio = () => this.props.type === "radio";

  render() {
    const {
      data,
      renderElement,
      keyExtractor,
      selected,
      className,
      errorMessage
    } = this.props;

    return (
      <div className={className}>
        {data.map(item => {
          const key = keyExtractor(item);

          const isSelected =
            !this.isRadio() && Array.isArray(selected)
              ? selected.indexOf(key) >= 0
              : key === selected;
          return (
            <div key={key} onClick={() => this.handleClick(key)}>
              {renderElement(
                {
                  item,
                  isSelected
                },
                this.props
              )}
            </div>
          );
        })}

        {errorMessage && (
          <div
            className={messageStyle}
            style={{ color: colors.red.base, width: "100%" }}
          >
            {errorMessage}
          </div>
        )}
      </div>
    );
  }
}

export default Controls;
