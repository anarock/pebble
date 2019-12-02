declare module "@storybook/addon-backgrounds" {
  import { DecoratorFn } from "@storybook/react";
  export interface Background {
    name: string;
    value: string;
    default?: boolean;
  }
  export function withBackgrounds(backgrounds: Background[]): DecoratorFn;
}
