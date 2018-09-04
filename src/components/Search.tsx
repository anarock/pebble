import * as React from "react";
import { cx } from "emotion";
import { SearchProps, SearchState } from "./typings/Search";
import {
  searchStyle,
  searchWrapperStyle,
  clearContainer
} from "./styles/Search.styles";

class Search extends React.PureComponent<SearchProps, SearchState> {
  static defaultProps: Partial<SearchProps> = {
    showSearchIcon: true,
    showClearButton: true,
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
      showClearButton,
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
        {type !== "large" && showSearchIcon && <i className="icon-search" />}
        <input
          className={searchStyle}
          type="text"
          aria-label={placeholder}
          placeholder={placeholder}
          value={searchValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({ searchValue: e.target.value });
            onChange(e.target.value);
          }}
        />
        {showClearButton && (
          <div
            className={cx(clearContainer, { __display: !!searchValue.length })}
            onClick={() => {
              this.setState({ searchValue: "" });
              onClear();
            }}
          >
            <i
              className="icon-close"
              style={{ display: "table-cell", verticalAlign: "middle" }}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Search;
