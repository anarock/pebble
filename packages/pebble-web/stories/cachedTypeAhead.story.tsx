import * as React from "react";
import { Omit } from "utility-types";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";

import { TypeaheadProps } from "../src/components/typings/Typeahead";
import { TypeAhead, Option } from "../src";

interface CachedTypeAheadProps<OptionType>
  extends Omit<TypeaheadProps<OptionType>, "onChange"> {
  children: (query: string) => Promise<React.ReactNode>;
  noResultsMessage?: string;
  failMessage?: string | ((err: Error) => string);
}

interface CacheTypeAheadState {
  query: string;
  cache: {
    [query: string]: {
      promise?: Promise<React.ReactNode>;
      options?: React.ReactNode;
      errorMessage?: string;
    };
  };
}

class CachedTypeAhead<OptionType> extends React.PureComponent<
  CachedTypeAheadProps<OptionType>,
  CacheTypeAheadState
> {
  state: Readonly<CacheTypeAheadState> = {
    query: "",
    cache: {
      "": {
        options: null
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
      query,
      cache: {
        ...this.state.cache,
        [query]: {
          promise: optionsPromise
        }
      }
    });
    let options;
    try {
      options = await optionsPromise;
    } catch (e) {
      const errorMessage =
        typeof this.props.failMessage === "function"
          ? this.props.failMessage(e)
          : typeof this.props.failMessage || "Failed Fetching Results";
      return this.setState({
        cache: {
          ...this.state.cache,
          [query]: { errorMessage }
        }
      });
    }

    this.setState({
      cache: {
        ...this.state.cache,
        [query]: { options }
      }
    });
  };

  render() {
    const {
      children,
      noResultsMessage,
      failMessage,
      ...remainingProps
    } = this.props;
    const { query, cache } = this.state;
    const options = cache[query] && cache[query].options;
    let errorMessage = cache[query] && cache[query].errorMessage;
    if (options && Array.isArray(options) && !options.length) {
      errorMessage = noResultsMessage || "No Results Found";
    }

    return (
      <TypeAhead
        {...remainingProps}
        onChange={this.onSearchBoxQueryChange}
        loading={!!query && !options && !errorMessage}
        errorMessage={errorMessage}
      >
        {options}
      </TypeAhead>
    );
  }
}

interface Book {
  key: string;
  title: string;
}

storiesOf("Recipes/TypeAhead", module).add("Cached TypeAhead", () => (
  <CachedTypeAhead
    styles={{
      width: 200
    }}
    placeholder="Select Fav Book"
    valueExtractor={v => v.title}
    onSelect={action("select")}
  >
    {query =>
      fetch(
        `https://bypasscors.herokuapp.com/api/?url=${encodeURIComponent(
          `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
        )}`
      )
        .then(res => res.json())
        .then(data =>
          data.docs.map((book: Book) => (
            <Option key={book.key} label={book.title} value={book} />
          ))
        )
    }
  </CachedTypeAhead>
));
