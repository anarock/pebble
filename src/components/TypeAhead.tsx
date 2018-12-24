import * as React from "react";
import debounce from "just-debounce-it";
import { TypeaheadProps, TypeaheadState } from "./typings/Typeahead";
import { cx } from "emotion";
import Input from "./Input";
import { optionsWrapper, wrapper } from "./styles/TypeAhead.styles";
import OutsideClick from "./OutsideClick";
import OptionGroupRadio from "./OptionGroupRadio";
import { animated } from "react-spring";
import MountTransition from "./shared/MountTransition";

class TypeAhead extends React.PureComponent<TypeaheadProps, TypeaheadState> {
  static defaultProps: Partial<TypeaheadProps> = {
    debounceTime: 500,
    onClear: () => {},
    searchBox: ({ registerChange, onFocus, value }, props) => (
      <Input
        onChange={registerChange}
        placeholder={props.placeholder}
        inputProps={{
          onFocus,
          onKeyDown: (e: React.KeyboardEvent) => {
            if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
            if (e.keyCode === 8 && props.selected) {
              // keyCode for delete
              registerChange("");
              props.onClear();
            }
          }
        }}
        value={value}
        errorMessage={props.errorMessage}
        loading={props.loading}
        required={props.required}
        disabled={props.disabled}
      />
    )
  };

  state: TypeaheadState = {
    value: this.props.initialValue || "",
    showSuggestions: false
  };

  private onChange = () => {
    this.props.onChange(this.state.value, this.props);
  };

  private debouncedChange = debounce(this.onChange, this.props.debounceTime);

  private registerChange = (value: string) => {
    this.setState(
      {
        value
      },
      this.debouncedChange
    );
  };

  private onFocus = () => {
    this.setState({
      showSuggestions: true
    });
  };

  private onSelect = (_value?: React.ReactText) => {
    this.props.onSelect(_value, this.props);

    this.setState({
      showSuggestions: false,
      value: (_value && this.props.valueExtractor(_value)) || ""
    });
  };

  render() {
    const { className, searchBox, dropdownClassName, children } = this.props;

    const { showSuggestions, value } = this.state;

    return (
      <OutsideClick
        onOutsideClick={() =>
          this.setState({
            showSuggestions: false
          })
        }
        disabled={!showSuggestions}
        className={cx(wrapper, className)}
      >
        {searchBox(
          {
            registerChange: this.registerChange,
            onFocus: this.onFocus,
            value
          },
          this.props
        )}

        <MountTransition visible={showSuggestions} native>
          {transitionStyles => (
            <animated.div
              style={transitionStyles}
              className={cx(optionsWrapper, dropdownClassName)}
            >
              <OptionGroupRadio onChange={this.onSelect}>
                {children}
              </OptionGroupRadio>
            </animated.div>
          )}
        </MountTransition>
      </OutsideClick>
    );
  }
}

export default TypeAhead;
