import * as React from "react";

interface UserAgentInfoProviderProps {
  userAgent: string;
}

// This is an object because more attributes might get added.
// Don't change to string.
export interface UserAgentInfo {
  // Add more attributes of the userAgent as neccessary.
  // Eg. isMobile, isDesktop, isBot etc.
  userAgent: string;
}

const defaultContext: UserAgentInfo = {
  userAgent: ""
};

export const UserAgentInfoContext = /*@__PURE__*/ React.createContext<
  UserAgentInfo
>(defaultContext);

function computeUserAgentInfo(userAgent: string): UserAgentInfo {
  return {
    userAgent
  };
}

export class UserAgentInfoProvider extends React.PureComponent<
  UserAgentInfoProviderProps,
  UserAgentInfo
> {
  // State is used to avoid creating new objects in render.
  // Can memoize computeUserAgentInfo but then might consume
  // a lot of memory on server.
  constructor(props: UserAgentInfoProviderProps) {
    super(props);
    if (typeof navigator !== "undefined" && navigator.userAgent) {
      this.state = computeUserAgentInfo(navigator.userAgent);
    } else if (props.userAgent) {
      this.state = computeUserAgentInfo(props.userAgent);
    } else {
      this.state = defaultContext;
    }
  }
  render() {
    return (
      <UserAgentInfoContext.Provider value={this.state}>
        {this.props.children}
      </UserAgentInfoContext.Provider>
    );
  }
}
