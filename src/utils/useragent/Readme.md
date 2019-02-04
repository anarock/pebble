# UserAgentInfoContext Documentation

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

// TODO Write this documentation.
