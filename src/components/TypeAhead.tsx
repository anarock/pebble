import * as React from "react";
import debounce from "just-debounce-it";
import { TypeaheadProps, TypeaheadState } from "./typings/Typeahead";
import { cx } from "emotion";
import Options from "./Options";
import { Transition, animated } from "react-spring";
import Input from "./Input";
import { optionsWrapper, wrapper } from "./styles/TypeAhead.styles";

class TypeAhead extends React.PureComponent<TypeaheadProps, TypeaheadState> {
  debouncedChange: () => void;
  typeAheadRef: React.RefObject<HTMLDivElement> = React.createRef();

  static defaultProps: Partial<TypeaheadProps> = {
    debounceTime: 500,
    searchBox: ({ registerChange, onFocus, value }, props) => (
      <Input
        onChange={registerChange}
        placeholder={props.placeholder}
        inputProps={{ onFocus }}
        value={value}
        errorMessage={props.errorMessage}
      />
    ),
    valueExtractor: suggestion => suggestion.label || suggestion.name
  };

  constructor(props) {
    super(props);

    this.debouncedChange = debounce(this.onChange, props.debounceTime);
  }

  state: TypeaheadState = {
    value: this.props.initialValue,
    showSuggestions: false
  };

  private handleMousePress = (e: MouseEvent) => {
    if (!this.typeAheadRef.current.contains(e.target as HTMLElement)) {
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
      <div className={cx(wrapper, className)} ref={this.typeAheadRef}>
        {searchBox(
          {
            registerChange: this.registerChange,
            onFocus: this.onFocus,
            value: this.state.value
          },
          this.props
        )}

        <Transition
          native
          from={{ opacity: 0, transform: "translateY(10px)" }}
          enter={{ opacity: 1, transform: "translateY(0)" }}
          leave={{ opacity: 0, transform: "translateY(10px)" }}
        >
          {this.state.showSuggestions &&
            (styles => (
              <animated.div
                style={styles}
                className={cx(optionsWrapper, dropdownClassName)}
              >
                <Options
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
