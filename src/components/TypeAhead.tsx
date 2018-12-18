import * as React from "react";
import debounce from "just-debounce-it";
import { TypeaheadProps, TypeaheadState } from "./typings/Typeahead";
import { cx } from "emotion";
import Input from "./Input";
import { optionsWrapper, wrapper } from "./styles/TypeAhead.styles";
import OutsideClick from "./OutsideClick";
import OptionGroupRadio from "./OptionGroupRadio";

class TypeAhead extends React.PureComponent<TypeaheadProps, TypeaheadState> {
  static defaultProps: Partial<TypeaheadProps> = {
    debounceTime: 500,
    onClear: () => {},
    searchBox: ({ registerChange, onFocus }, props) => (
      <Input
        onChange={value => {
          if (props.inputProps && props.inputProps.onChange) {
            props.inputProps.onChange(value);
          }
          registerChange(value);
        }}
        placeholder={props.placeholder}
        value={(props.inputProps && props.inputProps.value) || ""}
        errorMessage={props.errorMessage}
        loading={props.loading}
        required={props.required}
        disabled={props.disabled}
        {...props.inputProps}
        inputProps={{
          ...(props.inputProps && props.inputProps.inputProps),
          onFocus,
          onKeyDown: (e: React.KeyboardEvent) => {
            if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
            if (e.keyCode === 8 && props.selected) {
              // keyCode for delete
              if (props.inputProps && props.inputProps.onChange) {
                props.inputProps.onChange("");
              }
              registerChange("");
              props.onClear();
            }
          }
        }}
      />
    )
  };

  state: TypeaheadState = {
    showSuggestions: false
  };
  /*
  private onChange = (value: string) => {
    this.props.onChange(value, this.props);
  }; */

  private debouncedChange = (value: string) =>
    debounce(
      () => this.props.onChange(value, this.props),
      this.props.debounceTime
    );

  private registerChange = (value: string) => this.debouncedChange(value)();

  private onFocus = () => {
    this.setState({
      showSuggestions: true
    });
  };

  private onSelect = (_value?: React.ReactText) => {
    this.props.onSelect(_value, this.props);

    if (this.props.valueExtractor && _value) {
      this.props.valueExtractor(_value);
    }
    this.setState({
      showSuggestions: false
    });
  };

  render() {
    const { className, searchBox, dropdownClassName, children } = this.props;

    const { showSuggestions } = this.state;

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
            onFocus: this.onFocus
          },
          this.props
        )}

        {showSuggestions && (
          <div className={cx(optionsWrapper, dropdownClassName)}>
            <OptionGroupRadio onChange={this.onSelect}>
              {children}
            </OptionGroupRadio>
          </div>
        )}
      </OutsideClick>
    );
  }
}

export default TypeAhead;
