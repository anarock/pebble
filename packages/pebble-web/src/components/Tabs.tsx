import * as React from "react";
import { cx } from "emotion";
import { TabsState, TabsProps, TabSectionProps } from "./typings/Tabs";
import { tabStyle, tabsWrap, selectedTabStyle } from "./styles/Tabs.styles";

const TabSelectedContext = /*@__PURE__*/ React.createContext<string | null>(
  null
);

export class Tabs extends React.PureComponent<TabsProps, TabsState> {
  state: Readonly<TabsState> = {
    selectedTab:
      this.props.initialSelectedTab ||
      (this.props.tabs.length && this.props.tabs[0]) ||
      ""
  };

  static getDerivedStateFromProps(props: TabsProps): Partial<TabsState> | null {
    if (!props.selectedTab) {
      return null;
    }
    return {
      selectedTab: props.selectedTab
    };
  }

  render() {
    const _className = cx(tabStyle, this.props.tabClassName);

    const { labels } = this.props;

    return (
      <TabSelectedContext.Provider value={this.state.selectedTab}>
        <div className={cx(tabsWrap, this.props.wrapClassName)}>
          {this.props.tabs.map((tab, i) => (
            <span
              key={`${tab}-${i}`}
              data-test-id={`${tab
                .replace(/\d/g, "")
                .replace("(", "")
                .replace(")", "")
                .trim()}`}
              className={cx({
                [_className]: true,
                [selectedTabStyle]: this.state.selectedTab === tab
              })}
              onClick={() => {
                this.setState({
                  selectedTab: tab
                });
                if (this.props.onTabChange) {
                  this.props.onTabChange(tab);
                }
              }}
            >
              {labels && labels[tab] ? labels[tab] : tab}
            </span>
          ))}
        </div>
        {this.props.children}
      </TabSelectedContext.Provider>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
export class TabSection extends React.PureComponent<TabSectionProps, {}> {
  static context = TabSelectedContext;
  render() {
    const { section, children } = this.props;
    return (
      <TabSelectedContext.Consumer>
        {selectedTab => <>{section === selectedTab && children}</>}
      </TabSelectedContext.Consumer>
    );
  }
}
