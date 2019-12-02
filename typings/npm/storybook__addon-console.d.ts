declare module "@storybook/addon-console" {
  import { DecoratorFn } from "@storybook/react";
  interface StoryContext {
    kind: string;
    story: string;
  }
  export const withConsole: DecoratorFn;
}
