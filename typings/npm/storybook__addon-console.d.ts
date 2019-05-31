declare module "@storybook/addon-console" {
  import { RenderFunction, Renderable } from "@storybook/react";
  interface StoryContext {
    kind: string;
    story: string;
  }
  export function withConsole(): (
    storyFn: RenderFunction
  ) => (context: StoryContext) => Renderable | null;
}
