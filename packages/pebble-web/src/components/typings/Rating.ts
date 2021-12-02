export interface RatingProps {
  name: string;
  maxRating: number;
  value: number;
  onChange: (value: number) => void;
  disabled?: boolean;
  className?: string;
}

export interface RatingState {
  stars: Array<{ active: boolean }>;
}
