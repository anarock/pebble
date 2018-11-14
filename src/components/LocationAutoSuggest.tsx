import * as React from "react";
import googleMapsPromise from "./utils/googleMaps";
import PlacesAutocomplete from "react-places-autocomplete";
import Input from "./Input";
import Loader from "./Loader";
import { cx, css } from "react-emotion";
import { typography, mixins, colors } from "../theme";

export const optionRow = css({
  ...typography.normal.regular,
  lineHeight: "10px",
  cursor: "pointer",
  padding: "0 18px",
  position: "relative",
  zIndex: 999,
  ...mixins.textEllipsis,
  ...mixins.flexSpaceBetween,
  alignItems: "center",
  display: "flex",
  height: 52,
  "&:last-of-type": {
    border: 0
  },
  "&:hover": {
    backgroundColor: colors.gray.lightest
  }
});

export const activeRow = css({
  backgroundColor: colors.gray.lightest,
  cursor: "pointer"
});

export const generalRow = css({
  backgroundColor: "#ffffff",
  cursor: "pointer"
});

export const localityOptionsWrap = css({
  maxHeight: "200px",
  overflowY: "scroll"
});

export const loaderWrapper = css({
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

export interface State {
  isPromiseCompleted: boolean;
}

class LocationAutoComplete extends React.PureComponent<Props, State> {
  state = {
    isPromiseCompleted: false
  };

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
        onSelect={onSelect}
      >
        //@ts-ignore
        {({ getInputProps, suggestions, getSuggestionItemProps }) => {
          const inputProps = getInputProps();
          return (
            <React.Fragment>
              <Input
                value={value}
                onChange={val => {
                  inputProps.onChange({
                    target: {
                      value: val
                    }
                  });
                }}
                placeholder="Search Locality"
                inputProps={inputProps}
              />
              <div className={localityOptionsWrap}>
                //@ts-ignore
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? cx(optionRow, activeRow)
                    : cx(optionRow, generalRow);
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className
                      })}
                      key={suggestion}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </React.Fragment>
          );
        }}
      </PlacesAutocomplete>
    );
  }
}
export default LocationAutoComplete;
