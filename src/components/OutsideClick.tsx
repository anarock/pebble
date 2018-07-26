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

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClick);
    document.addEventListener("touchstart", this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick);
    document.removeEventListener("touchstart", this.handleClick);
  }

  render() {
    return <div ref={this.childRef}>{this.props.children}</div>;
  }
}

export default OutsideClick;
