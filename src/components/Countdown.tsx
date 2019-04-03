import * as React from "react";

interface CountdownProps {
  time: number; // in seconds
  counter: number; // in seconds
  onFinish: () => void;
}

interface CountdownState {
  timeRemaining: number;
}

export default class Countdown extends React.PureComponent<
  CountdownProps,
  CountdownState
> {
  static defaultProps = {
    time: 30,
    counter: 1000
  };

  state = {
    timeRemaining: this.props.time
  };

  timer: NodeJS.Timeout | number | null = null;

  componentDidMount() {
    this.startCountdown();
  }

  startCountdown() {
    const { counter, onFinish, time } = this.props;

    const startTime = Date.now();
    this.timer = setInterval(() => {
      const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
      const timeRemaining = Math.max(time - elapsedSeconds, 0);
      this.setState({ timeRemaining });
      if (!timeRemaining) {
        this.clearInterval();
        onFinish();
      }
    }, counter);
  }

  private clearInterval() {
    if (this.timer) {
      if (typeof this.timer === "number") {
        clearInterval(this.timer);
      } else {
        clearInterval(this.timer);
      }
    }
  }

  componentWillUnmount() {
    this.clearInterval();
  }

  render() {
    const { timeRemaining } = this.state;

    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    return <>{`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</>;
  }
}
