declare module "@storybook/addon-backgrounds" {
  import { StoryDecorator } from "@storybook/react";
  export interface Background {
    name: string;
    value: string;
    default?: boolean;
  }
  export function withBackgrounds(backgrounds: Background[]): StoryDecorator;
}
