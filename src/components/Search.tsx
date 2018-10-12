import * as React from "react";
import { cx } from "emotion";
import { SearchProps, SearchState } from "./typings/Search";
import {
  searchStyle,
  searchWrapperStyle,
  clearContainer
} from "./styles/Search.styles";

class Search extends React.PureComponent<SearchProps, SearchState> {
  searchInputRef: React.RefObject<HTMLInputElement> = React.createRef();

  static defaultProps: Partial<SearchProps> = {
    showSearchIcon: true,
    clearable: true,
    onClear: () => {}
  };

  state: SearchState = {
    searchValue: ""
  };

  render() {
    const {
      type,
      onChange,
      placeholder,
      showSearchIcon,
      className,
      clearable,
      onClear
    } = this.props;
    const { searchValue } = this.state;

    const wrapperClassName = cx(searchWrapperStyle, {
      __pebble__search__small: type === "small",
      __pebble__search__large: type === "large",
      __pebble__search__table: type === "table"
    });

    return (
      <div className={cx(wrapperClassName, className)}>
        {type !== "large" && showSearchIcon && <i className="pi pi-search" />}
        <input
          className={searchStyle}
          type="text"
          aria-label={placeholder}
          placeholder={placeholder}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({ searchValue: e.target.value });
            onChange(e.target.value);
          }}
          ref={this.searchInputRef}
        />
        {clearable && (
          <div
            className={cx(clearContainer, { __display: !!searchValue.length })}
            onClick={() => {
              this.setState({ searchValue: "" });
              if (this.searchInputRef.current) {
                this.searchInputRef.current.value = "";
              }
              onClear();
            }}
          >
            <i
              className="pi pi-close"
              style={{ display: "table-cell", verticalAlign: "middle" }}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Search;
