import * as React from "react";
import { cx } from "react-emotion";
import { ControlsProps, ControlViewProps } from "./typings/Controls";
import { colors } from "@src/theme";
import { controlViewStyle, iconStyle } from "./styles/Controls.styles";
import { messageStyle } from "./styles/Input.styles";

export enum ControlType {
  CHECKBOX = "checkbox",
  RADIO = "radio"
}

class Controls extends React.PureComponent<ControlsProps> {
  static defaultProps = {
    type: ControlType.RADIO
  };

  private handleClick = (id: string | number) => {
    const { onChange, allowUnselectForRadio, selected } = this.props;

    let result;
    if (this.isRadio()) {
      if (allowUnselectForRadio && id === selected) {
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
      labelExtractor,
      type,
      errorMessage
    } = this.props;

    return (
      <div className={className}>
        {data.map(datum => {
          const key = keyExtractor(datum);

          const isSelected =
            !this.isRadio() && Array.isArray(selected)
              ? selected.indexOf(key) >= 0
              : key === selected;
          return (
            <div key={key} onClick={() => this.handleClick(key)}>
              {renderElement ? (
                renderElement(
                  {
                    item: datum,
                    isSelected
                  },
                  this.props
                )
              ) : (
                <ControlView
                  type={type}
                  label={labelExtractor(datum)}
                  isSelected={isSelected}
                />
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

export const ControlView: React.SFC<ControlViewProps> = ({
  label,
  type,
  isSelected,
  className
}) => {
  const isRadio = type === ControlType.RADIO;
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

export default Controls;
