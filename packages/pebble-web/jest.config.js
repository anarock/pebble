const base = require("../../jest.config.base.js");
const pkg = require("./package.json");

module.exports = {
  ...base,
  displayName: pkg.name,
  name: pkg.name,
  "setupFiles": [
    "intersection-observer",
    `<rootDir>/tests/__setup__/setup.ts`
  ],
  "setupFilesAfterEnv": ["<rootDir>/tests/__setup__/setupFramework.ts"],
  "testMatch": [
    "<rootDir>/**/?(*.)+(spec|test).(j|t)s?(x)"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/tests/__mocks__/fileMock.js"
  }
};
