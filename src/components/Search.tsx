import * as React from "react";
import { cx } from "emotion";
import { SearchProps } from "./typings/Search";
import { searchStyle, searchWrapperStyle } from "./styles/Search.styles";

const Search: React.SFC<SearchProps> = ({
  type,
  onChange,
  placeholder,
  showSearchIcon = true,
  className
}) => {
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
    </div>
  );
};

export default Search;
