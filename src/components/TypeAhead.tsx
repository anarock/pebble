import * as React from "react";
import debounce from "just-debounce-it";
import { TypeaheadProps, TypeaheadState } from "./typings/Typeahead";
import { css, cx } from "react-emotion";
import Options from "./Options";
import { Transition, animated } from "react-spring";

const wrapper = css({
  position: "relative"
});

class TypeAhead extends React.PureComponent<TypeaheadProps, TypeaheadState> {
  debouncedChange: () => void;
  typeaheadRef: React.RefObject<HTMLDivElement> = React.createRef();

  static defaultProps = {
    debounceTime: 500
  };

  constructor(props: TypeaheadProps) {
    super(props);

    this.debouncedChange = debounce(this.onChange, props.debounceTime);
  }

  state: TypeaheadState = {
    value: this.props.initialValue,
    showSuggestions: false
  };

  private handleMousePress = (e: MouseEvent) => {
    if (!this.typeaheadRef.current.contains(e.target as HTMLElement)) {
      this.setState({
        showSuggestions: false
      });
    }
  };

  private addMouseClickListener = () =>
    document.addEventListener("mousedown", this.handleMousePress);

  private removeMouseClickListener = () =>
    document.removeEventListener("mousedown", this.handleMousePress);

  // @ts-ignore
  componentDidUpdate(prevProps, prevState: TypeaheadState) {
    if (prevState.showSuggestions === this.state.showSuggestions) return null;

    if (this.state.showSuggestions) {
      this.addMouseClickListener();
    } else {
      this.removeMouseClickListener();
    }
  }

  componentWillUnmount() {
    this.removeMouseClickListener();
  }

  onChange = () => {
    this.props.onChange(this.state.value, this.props);
  };

  private registerChange = (value: string) => {
    this.setState(
      {
        value
      },
      this.debouncedChange
    );
  };

  private onSelect = (suggestion: any) => {
    const { valueExtractor, onSelect } = this.props;
    this.setState(
      {
        value: valueExtractor(suggestion),
        showSuggestions: false
      },
      () => {
        onSelect(suggestion);
      }
    );
  };

  private onFocus = () => {
    this.setState({
      showSuggestions: true
    });
  };

  render() {
    const {
      className,
      searchBox,
      rowRenderElement,
      suggestions,
      dropdownClassName
    } = this.props;

    return (
      <div className={cx(wrapper, className)} ref={this.typeaheadRef}>
        {searchBox({
          registerChange: this.registerChange,
          onFocus: this.onFocus,
          value: this.state.value
        })}

        <Transition
          native
          from={{ opacity: 0, transform: "translateY(10px)" }}
          enter={{ opacity: 1, transform: "translateY(0)" }}
          leave={{ opacity: 0, transform: "translateY(10px)" }}
        >
          {this.state.showSuggestions &&
            (styles => (
              <animated.div style={{ ...styles, width: "100%" }}>
                <Options
                  dropdownClassName={cx(
                    css({ marginTop: -40, position: "absolute" }),
                    dropdownClassName
                  )}
                  rowRenderElement={rowRenderElement}
                  onSelect={this.onSelect}
                  options={suggestions}
                />
              </animated.div>
            ))}
        </Transition>
      </div>
    );
  }
}

export default TypeAhead;
