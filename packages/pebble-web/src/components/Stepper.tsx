import * as React from "react";
import { StepperProps, StepperState } from "./typings/Stepper";
import Button from "./Button";
import {
  activeDotStyle,
  contentWrapper,
  dotStyle,
  footerStyle,
  headingStyle,
  headSection,
  headStyle,
  stepperLineStyle
} from "./styles/Stepper.styles";
import { colors } from "pebble-shared";

function noop() {}

class Stepper extends React.PureComponent<StepperProps, StepperState> {
  static defaultProps: Partial<StepperProps> = {
    allowSkip: true,
    cancelLabel: "Cancel",
    nextLabel: "Next",
    prevLabel: "Prev",
    doneLabel: "Done",
    onBeforeNext: () => true,
    onBeforePrev: () => true,
    onChange: () => {},
    onCancel: () => {},
    onDone: () => {},
    renderFooterElement: ({ leftButtonData, rightButtonData }, props) => {
      return (
        <footer css={footerStyle}>
          <Button
            size="large"
            width={100}
            type={"secondary"}
            onClick={leftButtonData.action}
          >
            {leftButtonData.label}
          </Button>
          <Button
            size="large"
            width={100}
            loading={props.isRightButtonLoading}
            onClick={rightButtonData.action}
          >
            {rightButtonData.label}
          </Button>
        </footer>
      );
    }
  };

  state: StepperState = {
    active: this.props.initialSelectedIndex || 0
  };

  private goToNextPage = async () => {
    const { onBeforeNext, data } = this.props;
    const allow = await onBeforeNext(this.state.active);
    if (allow) this.goToPage(Math.min(data.length - 1, this.state.active + 1));
  };

  private goToPrevPage = async () => {
    const allow = await this.props.onBeforePrev(this.state.active);
    if (allow) this.goToPage(Math.max(0, this.state.active - 1));
  };

  private goToPage = (index: number): void => {
    const prev = this.state.active;
    this.setState(
      {
        active: index
      },
      () =>
        this.props.onChange({
          prev,
          current: this.state.active
        })
    );
  };

  private getHeadings = (): string[] => {
    const { headingExtractor, data } = this.props;
    return data.map(datum => headingExtractor({ item: datum }));
  };

  private getLeftButtonData = () => {
    const { cancelLabel, prevLabel, onCancel } = this.props;
    return this.state.active === 0
      ? {
          label: cancelLabel,
          action: onCancel
        }
      : {
          label: prevLabel,
          action: this.goToPrevPage
        };
  };

  private getRightButtonData = () => {
    const { nextLabel, onDone, data, doneLabel } = this.props;
    return this.state.active === data.length - 1
      ? {
          label: doneLabel,
          action: onDone
        }
      : {
          label: nextLabel,
          action: this.goToNextPage
        };
  };

  render() {
    const {
      data,
      renderContentElement,
      keyExtractor,
      renderFooterElement,
      styles,
      allowSkip
    } = this.props;

    const { active } = this.state;

    const args = {
      goToNext: this.goToNextPage,
      goToPage: this.goToPage,
      goToPrev: this.goToPrevPage,
      leftButtonData: this.getLeftButtonData(),
      rightButtonData: this.getRightButtonData()
    };

    return (
      <div css={styles}>
        <div css={headStyle}>
          {this.getHeadings().map((heading, i) => {
            const headingColor =
              i === active
                ? colors.violet.base
                : allowSkip
                ? colors.gray.base
                : undefined;

            return (
              <div
                key={keyExtractor(data[i])}
                css={[headSection, !allowSkip && { cursor: "inherit" }]}
                onClick={allowSkip ? () => this.goToPage(i) : noop}
              >
                <div css={headingStyle} style={{ color: headingColor }}>
                  {heading}
                </div>
                <div css={[dotStyle, i <= active && activeDotStyle]} />
              </div>
            );
          })}
          <div
            css={stepperLineStyle}
            style={{
              width: `${(100 / (2 * data.length)) * 2 * active}%`,
              marginLeft: `${100 / (2 * data.length)}%`
            }}
          />
        </div>

        <div css={contentWrapper}>
          {data.map((datum, i) => (
            <div
              key={keyExtractor(datum)}
              css={[i !== this.state.active && { display: "none" }]}
            >
              {renderContentElement({
                item: datum,
                isSelected: i === this.state.active,
                ...args
              })}
            </div>
          ))}

          {renderFooterElement(
            {
              activeIndex: this.state.active,
              ...args
            },
            this.props
          )}
        </div>
      </div>
    );
  }
}

export default Stepper;
