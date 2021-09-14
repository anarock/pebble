import { cx } from "emotion";
import * as React from "react";
import {
  disabledStyle,
  selectedStar,
  unSelectedStar,
  wrapStyle
} from "./styles/Rating.styles";
import { RatingProps, RatingState } from "./typings/Rating";

function generateStars(maxRating: number, selectedValue: number) {
  return Array.from({ length: maxRating }, (_, i) => {
    return { active: i + 1 <= selectedValue };
  });
}

class Rating extends React.PureComponent<RatingProps, RatingState> {
  constructor(props: RatingProps) {
    super(props);
    this.state = {
      stars: generateStars(props.maxRating, props.value)
    };
  }

  componentDidUpdate(prevProps: RatingProps) {
    const { maxRating, value } = this.props;
    if (prevProps.maxRating !== maxRating) {
      this.setState({
        stars: generateStars(maxRating, value)
      });
    }
  }

  setRating = (rating: number) => {
    const { maxRating, disabled } = this.props;
    if (disabled) {
      return;
    }
    this.setState({
      stars: generateStars(maxRating, rating)
    });
  };

  render() {
    const { name, value, onChange, disabled, className } = this.props;
    const { stars } = this.state;

    const _className = cx(wrapStyle, className, disabled && disabledStyle);

    return (
      <div className={_className}>
        {stars.map((star, starIndex) => {
          const rating = starIndex + 1;
          return (
            <span
              key={`${name}-${rating}`}
              onMouseEnter={() => this.setRating(rating)}
              onMouseLeave={() => this.setRating(value)}
              onClick={() => {
                this.setRating(rating);
                onChange(rating);
              }}
            >
              <i
                className={cx(
                  "pi pi-grade",
                  unSelectedStar,
                  star.active && selectedStar
                )}
              />
            </span>
          );
        })}
      </div>
    );
  }
}

export default Rating;
