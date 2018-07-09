import * as React from "react";
import { css, cx } from "react-emotion";
import { StepperProps, StepperState } from "@src/components/typings/Stepper";
import Button from "@src/components/Button";
import {
  activeDotStyle,
  contentWrapper,
  dotStyle,
  footerStyle,
  Heading,
  headSection,
  headStyle,
  stepperLineStyle
} from "@src/components/styles/Stepper.styles";

function noop() {}

class Stepper extends React.PureComponent<StepperProps, StepperState> {
  static defaultProps = {
    allowSkip: true,
    cancelLabel: "Cancel",
    nextLabel: "Next",
    prevLabel: "Prev",
    doneLabel: "Done",
    onBeforeNext: () => true,
    onBeforePrev: () => true,
    onChange: () => {}
  };

  state: StepperState = {
    active: this.props.initialSelectedIndex || 0
  };

  private goToNextPage = async () => {
    const allow = await this.props.onBeforeNext(this.state.active);
    if (allow)
      this.goToPage(
        Math.min(this.props.data.length - 1, this.state.active + 1)
      );
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
      className,
      allowSkip
    } = this.props;
    return (
      <div className={className}>
        <div className={headStyle}>
          {this.getHeadings().map((heading, i) => {
            const dotClass = cx(dotStyle, {
              [activeDotStyle]: i <= this.state.active
            });
            return (
              <div
                key={keyExtractor(data[i])}
                className={cx(headSection, {
                  [css({ cursor: "inherit" })]: !allowSkip
                })}
                onClick={allowSkip ? () => this.goToPage(i) : noop}
              >
                <Heading
                  isSelected={i === this.state.active}
                  isDisabled={!allowSkip}
                >
                  {heading}
                </Heading>
                <div className={dotClass} />
              </div>
            );
          })}
          <div
            className={stepperLineStyle}
            style={{
              width: `${(100 / (2 * data.length)) * 2 * this.state.active}%`,
              marginLeft: `${100 / (2 * data.length)}%`
            }}
          />
        </div>

        <div className={contentWrapper}>
          {data.map((datum, i) => (
            <div
              key={keyExtractor(datum)}
              className={cx({
                [css({ display: "none" })]: i !== this.state.active
              })}
            >
              {renderContentElement({
                item: datum,
                goToNext: this.goToNextPage,
                goToPage: this.goToPage,
                goToPrev: this.goToPrevPage,
                isSelected: i === this.state.active,
                leftButtonData: this.getLeftButtonData(),
                rightButtonData: this.getRightButtonData()
              })}
            </div>
          ))}

          {renderFooterElement ? (
            renderFooterElement(this.state.active, this.props)
          ) : (
            <footer className={footerStyle}>
              <Button
                large
                width={100}
                type={"secondary"}
                onClick={this.getLeftButtonData().action}
              >
                {this.getLeftButtonData().label}
              </Button>
              <Button
                large
                width={100}
                onClick={this.getRightButtonData().action}
              >
                {this.getRightButtonData().label}
              </Button>
            </footer>
          )}
        </div>
      </div>
    );
  }
}

export default Stepper;
