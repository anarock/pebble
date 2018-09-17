import * as React from "react";
import { OutsideClickProps } from "./typings/OutsideClick";

class OutsideClick extends React.PureComponent<OutsideClickProps> {
  childRef: React.RefObject<HTMLDivElement> = React.createRef();

  handleClick = (e: MouseEvent) => {
    if (
      this.childRef &&
      !this.childRef.current.contains(e.target as HTMLElement)
    ) {
      this.props.onOutsideClick();
    }
  };

  addListener = () => {
    document.addEventListener("mousedown", this.handleClick);
    document.addEventListener("touchstart", this.handleClick);
  };

  removeListener = () => {
    document.removeEventListener("mousedown", this.handleClick);
    document.removeEventListener("touchstart", this.handleClick);
  };

  componentDidMount() {
    if (!this.props.disabled) {
      this.addListener();
    }
  }

  componentWillUnmount() {
    this.removeListener();
  }

  componentDidUpdate(prevProps: OutsideClickProps) {
    if (prevProps.disabled !== this.props.disabled) {
      this.props.disabled ? this.removeListener() : this.addListener();
    }
  }

  render() {
    const { className, children } = this.props;
    return (
      <div ref={this.childRef} className={className}>
        {children}
      </div>
    );
  }
}

export default OutsideClick;
