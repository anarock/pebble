# UserAgentInfoContext Documentation

A React Context Provider specifically meant for userAgent and its derived attributes.
Set userAgent from top level component so that it is accessible within components on server and client.
Similar to [@quentin-sommer/react-useragent](https://github.com/quentin-sommer/react-useragent) but with type definitions and reduced scope.

```tsx
import { UserAgentInfoContext } from "@anarock/pebble";

class Component extends React.PureComponent {
  static context = UserAgentInfoContext;
  render () {
    return (
      <UserAgentInfoContext.Consumer>
        {({ userAgent, isMobile }) => (
          // Can use userAgent & isMobile here.
        )}
      </UserAgentInfoContext.Consumer>
    )
  }
}
```

## Usage with next.js

```tsx
import App, { Container, NextAppContext } from "next/app";
import * as React from "react";
import { UserAgentInfoProvider } from "@anarock/pebble";

interface RootProps {
  Component: React.ComponentClass;
  userAgent: string;
  // tslint:disable-next-line no-any
  pageProps: any;
}

export default class MyApp extends App<RootProps> {
  static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const userAgent =
      (ctx.req
        ? ctx.req.headers["user-agent"]
        : typeof navigator !== "undefined" && navigator.userAgent) || "";

    return {
      userAgent,
      pageProps
    };
  }

  render() {
    const { Component, pageProps, userAgent } = this.props;
    return (
      <Container>
        <UserAgentInfoProvider userAgent={userAgent}>
          <Component {...pageProps} />
        </UserAgentInfoProvider>
      </Container>
    );
  }
}
```
