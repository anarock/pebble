import * as React from "react";
import { cx, css } from "emotion";
import {
  activeRow,
  rowWrapper,
  optionsWrapper,
  selectedRow,
  rowTextStyle
} from "./styles/Options.styles";
import { OptionsProps, OptionsState } from "./typings/Options";
import Ink from "react-ink";
import Controls from "./Controls";

class Options extends React.PureComponent<OptionsProps, OptionsState> {
  optionRef: React.RefObject<HTMLDivElement> = React.createRef();

  static defaultProps: Partial<OptionsProps> = {
    keyExtractor: item => item.id,
    rowRenderElement: ({ item, isActive, isSelected }) => {
      const _class = cx(rowWrapper, {
        [activeRow]: isActive,
        [selectedRow]: isSelected
      });
      return (
        <div className={_class}>
          <Ink />
          <div className={rowTextStyle}>{item.label || item.name}</div>
        </div>
      );
    }
  };

  state = {
    selected: 0
  };

  private handleKeyPress = (e: KeyboardEvent) => {
    const { options, onSelect } = this.props;

    if (e.which === 13) {
      onSelect(options[this.state.selected], this.props);
    }

    this.setState(
      () => {
        let selected = this.state.selected;
        if (e.which === 40) {
          e.preventDefault();
          selected = Math.min(selected + 1, options.length - 1);
        }
        if (e.which === 38) {
          e.preventDefault();
          selected = Math.max(selected - 1, 0);
        }

        return { selected };
      },
      () => {
        if (this.optionRef.current && (e.which === 40 || e.which === 38)) {
          // @ts-ignore
          this.optionRef.current.childNodes[this.state.selected].scrollIntoView(
            {
              behavior: "smooth"
            }
          );
        }
      }
    );
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  render() {
    const {
      options,
      rowRenderElement,
      onSelect,
      dropdownClassName,
      width,
      keyExtractor,
      selected,
      hideBorder
    } = this.props;

    if (!options.length) return null;
    return (
      <div
        ref={this.optionRef}
        className={cx(
          optionsWrapper,
          dropdownClassName,
          css({ width, ...(hideBorder ? { boxShadow: "none" } : {}) })
        )}
      >
        <Controls
          data={options}
          keyExtractor={keyExtractor}
          selected={selected}
          onChange={args => onSelect(args, this.props)}
          renderElement={args =>
            rowRenderElement({
              ...args,
              isActive: args.index === this.state.selected
            })
          }
        />
      </div>
    );
  }
}

export default Options;
