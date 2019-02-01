export interface LocationSearchProps {
  className?: string;
  value: string;
  googleMapsApiKey: string;
  onChange: (query: string) => void;
  onSelect: (value: string, id: string) => void;
}

export interface Suggestion {
  description: string;
  id: string;
  placeId: string;
}

export interface LocationSearchState {
  isPromiseCompleted: boolean;
  errorStatus: string;
}
