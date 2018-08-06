import * as React from "react";
import { cx, css } from "emotion";
import {
  activeRow,
  rowWrapper,
  optionsWrapper,
  selectedRow
} from "./styles/Options.styles";
import { OptionsProps, OptionsState } from "./typings/Options";
import Ink from "react-ink";

class Options extends React.PureComponent<OptionsProps, OptionsState> {
  optionRef: React.RefObject<HTMLDivElement> = React.createRef();

  static defaultProps: Partial<OptionsProps> = {
    keyExtractor: item => item.id,
    rowRenderElement: item => <div>{item.label || item.name}</div>
  };

  state = {
    selected: 0
  };

  private handleKeyPress = (e: KeyboardEvent) => {
    const { options, onSelect } = this.props;

    if (e.which === 13) {
      onSelect(options[this.state.selected]);
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
        {options.map((suggestion, i) => {
          const _class = cx(rowWrapper, {
            [activeRow]: i === this.state.selected,
            [selectedRow]: keyExtractor(suggestion) === selected
          });
          return (
            <div
              key={i}
              className={_class}
              onClick={() => onSelect(suggestion)}
            >
              <Ink />
              {rowRenderElement(suggestion, i, i === this.state.selected)}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Options;
