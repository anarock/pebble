import * as React from "react";
import * as ReactDOM from "react-dom";
import { OptionProps } from "../typings/Option";
import { OptionGroupProps, OptionGroupState } from "../typings/OptionGroup";
import scrollIntoView from "scroll-into-view-if-needed";
import { cx } from "emotion";
import Search from "../Search";
import {
  searchBoxScrolledStyle,
  searchBoxWrapper,
  optionsWrapper,
  searchBoxHeight
} from "../styles/OptionGroup.styles";

class OptionGroup<OptionType> extends React.PureComponent<
  OptionGroupProps<OptionType>,
  OptionGroupState
> {
  optionRef: React.RefObject<HTMLDivElement> = React.createRef();
  optionsRefsSet = new Map<number, React.RefObject<React.ReactInstance>>();
  observer?: IntersectionObserver;

  state: Readonly<OptionGroupState> = {
    highlighted: -1,
    isScrolled: false
  };

  private handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { handleChange, isSelected } = this.props;
    const children = React.Children.toArray(this.props.children);
    const { highlighted } = this.state;
    const { which } = e;

    if (which === 13 && children && children[highlighted]) {
      // Enter key
      // @ts-ignore
      const { value } =
        // @ts-ignore
        children && children[highlighted] && children[highlighted].props;

      handleChange(
        {
          value,
          checked: !isSelected(value)
        },
        e
      );
    }

    this.setState(
      () => {
        let _highlighted = highlighted;
        if (which === 40) {
          _highlighted = Math.min(
            _highlighted + 1,
            React.Children.count(children) - 1
          );
        }
        if (which === 38) {
          _highlighted = Math.max(_highlighted - 1, 0);
        }

        return { highlighted: _highlighted };
      },
      () => {
        const currentRef = this.optionsRefsSet.get(highlighted);
        if (
          this.optionRef.current &&
          (which === 40 || which === 38) &&
          currentRef &&
          currentRef.current
        ) {
          const element = ReactDOM.findDOMNode(currentRef.current) as Element;
          if (element) {
            scrollIntoView(element, {
              behavior: "smooth",
              boundary: this.optionRef.current
            });
          }
        }
      }
    );
  };

  componentDidMount() {
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
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  render() {
    const {
      searchBox,
      children,
      multiSelect,
      className,
      isSelected,
      handleChange,
      searchBoxProps
    } = this.props;
    const { isScrolled, highlighted } = this.state;

    const _children = React.Children.map(children, (_option, i) => {
      // `_option as React.ReactElement<OptionProps>` is a hack
      // Because React does not allow us to specify what sort of elements
      // you can allow as children and leaves it on you to figure out
      // all various types of children provided.
      const option = _option as React.ReactElement<OptionProps<OptionType>>;
      let ref = this.optionsRefsSet.get(i);
      if (!ref) {
        ref = React.createRef<HTMLDivElement>();
        this.optionsRefsSet.set(i, ref);
      }
      return React.cloneElement(option, {
        onChange: handleChange,
        isActive: highlighted === i,
        isSelected: isSelected(option.props.value),
        multiSelect,
        // @ts-ignore
        ref
      });
    });

    const searchBoxClassName = cx(searchBoxWrapper, {
      [searchBoxScrolledStyle]: isScrolled
    });

    return (
      <React.Fragment>
        {searchBox && searchBoxProps && (
          <div className={searchBoxClassName}>
            <Search
              type="small"
              {...searchBoxProps}
              inputProps={{
                ...(searchBoxProps && searchBoxProps.inputProps),
                onKeyDown: this.handleKeyPress,
                autoFocus: true
              }}
            />
          </div>
        )}
        {!!React.Children.count(children) && (
          <div
            ref={this.optionRef}
            style={{
              paddingTop: searchBox ? searchBoxHeight : undefined
            }}
            className={cx(optionsWrapper, className)}
            role={multiSelect ? "group" : "radiogroup"}
            data-test-id="optiongroup"
          >
            {_children}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default OptionGroup;
