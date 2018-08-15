import * as React from "react";
import debounce from "just-debounce-it";
import { TypeaheadProps, TypeaheadState } from "./typings/Typeahead";
import { cx } from "emotion";
import Input from "./Input";
import { optionsWrapper, wrapper } from "./styles/TypeAhead.styles";
import OutsideClick from "./OutsideClick";
import OptionGroupRadio from "./OptionGroupRadio";

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
        loading={props.loading}
      />
    )
  };

  constructor(props) {
    super(props);

    this.debouncedChange = debounce(this.onChange, props.debounceTime);
  }

  state: TypeaheadState = {
    value: this.props.initialValue,
    showSuggestions: true
  };

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

  private onFocus = () => {
    this.setState({
      showSuggestions: true
    });
  };

  private onSelect = _value => {
    this.props.onSelect(_value, this.props);

    this.setState({
      showSuggestions: false,
      value: this.props.valueExtractor(_value)
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
      >
        <div className={cx(wrapper, className)} ref={this.typeAheadRef}>
          {searchBox(
            {
              registerChange: this.registerChange,
              onFocus: this.onFocus,
              value
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
        </div>
      </OutsideClick>
    );
  }
}

export default TypeAhead;
