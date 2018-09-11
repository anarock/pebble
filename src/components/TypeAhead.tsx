import * as React from "react";
import debounce from "just-debounce-it";
import {
  TypeaheadProps,
  TypeaheadState,
  CachedTypeAheadProps,
  CacheTypeAheadState
} from "./typings/TypeAhead";
import { cx } from "emotion";
import Input from "./Input";
import { optionsWrapper, wrapper } from "./styles/TypeAhead.styles";
import OutsideClick from "./OutsideClick";
import OptionGroupRadio from "./OptionGroupRadio";

export class CachedTypeAhead extends React.PureComponent<
  CachedTypeAheadProps,
  CacheTypeAheadState
> {
  state = {
    query: "",
    cache: {
      "": {
        promise: Promise.resolve([]),
        options: []
      }
    }
  };

  private onSearchBoxQueryChange = async (query: string) => {
    if (this.state.query === query) return;

    if (this.state.cache[query]) {
      return this.setState({ query });
    }

    const optionsPromise = this.props.children(query);
    this.setState({
      query: query,
      cache: {
        ...this.state.cache,
        [query]: {
          promise: optionsPromise
        }
      }
    });

    const options = await optionsPromise;
    this.setState({
      cache: {
        ...this.state.cache,
        [query]: { options }
      }
    });
  };

  render() {
    const { ...remainingProps } = this.props;
    const { query, cache } = this.state;

    let options = cache[query].options || null;

    return (
      <TypeAhead
        {...remainingProps}
        onChange={this.onSearchBoxQueryChange}
        loading={!options}
      >
        {options}
      </TypeAhead>
    );
  }
}

export default class TypeAhead extends React.PureComponent<
  TypeaheadProps,
  TypeaheadState
> {
  debouncedChange: () => void;
  typeAheadRef: React.RefObject<HTMLDivElement> = React.createRef();

  static Cached = CachedTypeAhead;

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
        required={props.required}
      />
    )
  };

  constructor(props) {
    super(props);

    this.debouncedChange = debounce(this.onChange, props.debounceTime);
  }

  state: TypeaheadState = {
    value: this.props.initialValue,
    showSuggestions: false
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

          {showSuggestions &&
            children &&
            !!children.length && (
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
