import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import TypeAhead from "./TypeAhead";
import Option from "./Option";
import Loader from "./Loader";
import { css } from "react-emotion";
import googleMapsPromise from "../utils/googleMapsPromise";

const loaderWrapper = css({
  display: "flex",
  flex: 1,
  height: "100vh",
  alignItems: "center",
  justifyContent: "center"
});

export interface Props {
  value: string;
  onChange: (query: string) => void;
  onSelect: (value: string, id: string) => void;
}

export interface Suggestion {
  description: string;
  id: string;
  placeId: string;
}

export interface State {
  isPromiseCompleted: boolean;
}

class LocationSearchInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isPromiseCompleted: false
    };
  }

  componentDidMount() {
    this.initialMount();
  }

  initialMount = async () => {
    await googleMapsPromise().then(() => {
      this.setState({
        isPromiseCompleted: true
      });
    });
  };

  render() {
    if (!this.state.isPromiseCompleted) {
      return (
        <div className={loaderWrapper}>
          <Loader />
        </div>
      );
    }
    const { value, onChange, onSelect } = this.props;
    return (
      <PlacesAutocomplete
        inputProps={{
          value,
          onChange
        }}
        // @ts-ignore
        onChange={onChange}
        value={value}
      >
        {(opts: {}) => {
          const {
            // @ts-ignore
            getInputProps,
            // @ts-ignore
            suggestions,
            // @ts-ignore
            getSuggestionItemProps,
            // @ts-ignore
            loading
          } = opts;
          const inputProps = getInputProps();
          return (
            <React.Fragment>
              <TypeAhead
                placeholder="Search Locality"
                onChange={val => {
                  inputProps.onChange({
                    target: {
                      value: val
                    }
                  });
                }}
                onClear={() => {
                  onSelect("", "");
                }}
                onSelect={placeId => {
                  // @ts-ignore
                  const selected = suggestions.find(
                    // @ts-ignore
                    suggestion => suggestion.placeId === placeId
                  );
                  onSelect(selected.description, placeId as string);
                }}
                valueExtractor={placeId => {
                  // @ts-ignore
                  const selected = suggestions.find(
                    // @ts-ignore
                    suggestion => suggestion.placeId === placeId
                  );
                  return selected.description;
                }}
                loading={loading}
              >
                {suggestions.map((suggestion: Suggestion) => (
                  <Option
                    key={suggestion.id}
                    label={suggestion.description}
                    value={suggestion.placeId}
                  />
                ))}
              </TypeAhead>
            </React.Fragment>
          );
        }}
      </PlacesAutocomplete>
    );
  }
}
export default LocationSearchInput;
