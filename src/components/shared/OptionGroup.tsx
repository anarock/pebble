import * as React from "react";
import { OptionProps } from "../typings/Option";
import * as ReactDOM from "react-dom";
import { OptionGroupProps_, OptionGroupState_ } from "../typings/OptionGroup";
import scrollIntoView from "scroll-into-view-if-needed";
import { cx } from "emotion";
import Search from "../Search";
import {
  searchBoxScrolledStyle,
  searchBoxWrapper,
  optionsWrapper,
  optionsWrapperScrolledStyle
} from "../styles/OptionGroup.styles";

class OptionGroup extends React.PureComponent<
  OptionGroupProps_,
  OptionGroupState_
> {
  optionRef: React.RefObject<HTMLDivElement> = React.createRef();
  observer: IntersectionObserver;

  state = {
    selected: -1,
    isScrolled: false
  };

  private handleKeyPress = (e: KeyboardEvent) => {
    const { children, handleChange } = this.props;
    const { selected } = this.state;
    const { which } = e;

    if (which === 13) {
      // Enter key
      // @ts-ignore
      const { value, isSelected } =
        // @ts-ignore
        (children && children[selected] && children[selected].props) || {};

      handleChange({
        value,
        checked: !isSelected
      });
    }

    this.setState(
      () => {
        let _selected = selected;
        if (which === 40) {
          e.preventDefault();
          _selected = Math.min(
            _selected + 1,
            React.Children.count(children) - 1
          );
        }
        if (which === 38) {
          e.preventDefault();
          _selected = Math.max(_selected - 1, 0);
        }

        return { selected: _selected };
      },
      () => {
        if (this.optionRef.current && (which === 40 || which === 38)) {
          scrollIntoView(
            ReactDOM.findDOMNode(
              this[`option-ref-${selected}`].current
            ) as Element,
            {
              behavior: "smooth",
              boundary: this.optionRef.current
            }
          );
        }
      }
    );
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);

    this.observer = new IntersectionObserver(
      entries => {
        this.setState({
          isScrolled: entries[0].intersectionRatio < 0.9
        });
      },
      {
        root: this.optionRef.current,
        threshold: 0.9
      }
    );

    if (
      this.optionRef.current &&
      this.optionRef.current.childNodes &&
      this.optionRef.current.childNodes.length
    ) {
      this.observer.observe(this.optionRef.current.childNodes[0] as Element);
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
    this.observer.disconnect();
  }

  render() {
    const {
      searchBox,
      children,
      multiSelect,
      onSearchBoxQueryChange,
      className,
      searchBoxPlaceholder,
      isSelected,
      handleChange
    } = this.props;
    const { isScrolled, selected } = this.state;

    const _children = React.Children.map(
      children,
      (option: React.ReactElement<OptionProps>, i) => {
        this[`option-ref-${i}`] = React.createRef();
        return React.cloneElement(option, {
          onChange: handleChange,
          isActive: selected === i,
          isSelected: isSelected(option.props.value),
          multiSelect,
          // @ts-ignore
          ref: this[`option-ref-${i}`]
        });
      }
    );

    const searchBoxClassName = cx(searchBoxWrapper, {
      [searchBoxScrolledStyle]: isScrolled
    });

    return (
      <React.Fragment>
        {searchBox && (
          <div className={searchBoxClassName}>
            <Search
              type="small"
              onChange={onSearchBoxQueryChange}
              placeholder={searchBoxPlaceholder}
            />
          </div>
        )}
        {children &&
          !!children.length && (
            <div
              ref={this.optionRef}
              style={{
                paddingTop: searchBox ? 0 : undefined
              }}
              className={cx(
                optionsWrapper,
                { [optionsWrapperScrolledStyle]: isScrolled },
                className
              )}
            >
              {_children}
            </div>
          )}
      </React.Fragment>
    );
  }
}

export default OptionGroup;
