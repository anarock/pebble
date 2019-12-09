import * as React from "react";

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
      styles,
      clearable,
      value
    } = this.props;

    const wrapperClassName = [
      searchWrapperStyle,
      type === "small" && "__pebble__search__small",
      type === "large" && "__pebble__search__large",
      type === "table" && "__pebble__search__table"
    ];

    return (
      <div css={[wrapperClassName, styles]}>
        {type !== "large" && showSearchIcon && <i className="pi pi-search" />}
        <input
          css={searchStyle}
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
            css={[clearContainer, !!value && !!value.length && "__display"]}
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
