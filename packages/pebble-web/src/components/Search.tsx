import * as React from "react";
import { cx } from "emotion";
import { SearchProps } from "./typings/Search";
import {
  searchStyle,
  searchWrapperStyle,
  clearContainer
} from "./styles/Search.styles";

class Search extends React.PureComponent<SearchProps> {
  searchInputRef: React.RefObject<HTMLInputElement> = React.createRef();

  static defaultProps = {
    showSearchIcon: true,
    clearable: true
  };

  render() {
    const {
      type,
      inputProps,
      onChange,
      placeholder,
      showSearchIcon,
      className,
      clearable,
      value
    } = this.props;

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
            onChange(e.target.value);
          }}
          ref={this.searchInputRef}
          value={value}
          {...inputProps}
        />
        {clearable && (
          <div
            className={cx(clearContainer, {
              __display: value && !!value.length
            })}
            onClick={() => {
              if (this.searchInputRef.current) {
                this.searchInputRef.current.value = "";
              }
              onChange("");
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
