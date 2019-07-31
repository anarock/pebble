# pebble

A design system comprising of component and utilities creating using React.
It consists of:

- [pebble-web](./packages/pebble-web)
- [pebble-shared](./packages/pebble-shared)

### development

Install yarn globally.

```$xslt
npm i -g yarn
```

- Clone the repo.
- Install deps `yarn install`
- Run `yarn lerna bootstrap` at the root of the directory.
- Run `yarn storybook` to look at the preview of all the components and start development.
- To run tests, run `yarn build` before `yarn jest`
