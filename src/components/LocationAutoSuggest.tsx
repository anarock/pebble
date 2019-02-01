import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import TypeAhead from "./TypeAhead";
import Option from "./Option";
import Loader from "./Loader";
import googleMapsPromise from "../utils/googleMaps";
import { loaderWrapper } from "./styles/LocationAutoSuggest.styles";
import {
  LocationSearchProps,
  LocationSearchState,
  Suggestion
} from "./typings/LocationAutoSuggest";

class LocationSearchInput extends React.Component<
  LocationSearchProps,
  LocationSearchState
> {
  state: Readonly<LocationSearchState> = {
    isPromiseCompleted: false,
    errorStatus: ""
  };

  componentDidMount() {
    this.initialMount();
  }

  async initialMount() {
    await googleMapsPromise(this.props.googleMapsApiKey).then(() => {
      this.setState({
        isPromiseCompleted: true
      });
    });
  }

  render() {
    if (!this.state.isPromiseCompleted) {
      return (
        <div className={loaderWrapper}>
          <Loader />
        </div>
      );
    }
    const { value, onChange, onSelect, className } = this.props;
    return (
      <PlacesAutocomplete
        value={value}
        onChange={onChange}
        onError={(status, clearSuggestions) => {
          this.setState({
            errorStatus: status
          });
          clearSuggestions();
          if (status !== "ZERO_RESULTS") {
            const e = new Error();
            e.message = status;
            throw e;
          }
        }}
      >
        {({ getInputProps, suggestions, loading }) => {
          const inputProps = getInputProps();
          return (
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
              initialValue={value}
              onSelect={placeId => {
                const selected = suggestions.find(
                  suggestion => suggestion.placeId === placeId
                );
                this.setState({
                  errorStatus: ""
                });
                if (selected) {
                  onSelect(selected.description, placeId as string);
                }
              }}
              valueExtractor={placeId => {
                const selected = suggestions.find(
                  suggestion => suggestion.placeId === placeId
                );
                return (selected && selected.description) || "";
              }}
              loading={loading}
              errorMessage={
                (this.state.errorStatus === "ZERO_RESULTS" &&
                  "No Results Found") ||
                undefined
              }
              className={className}
            >
              {suggestions.map((suggestion: Suggestion) => (
                <Option
                  key={suggestion.id}
                  label={suggestion.description}
                  value={suggestion.placeId}
                />
              ))}
            </TypeAhead>
          );
        }}
      </PlacesAutocomplete>
    );
  }
}
export default LocationSearchInput;
