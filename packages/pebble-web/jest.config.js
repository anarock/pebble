const pkg = require("./package.json");

module.exports = {
  displayName: pkg.name,
  name: pkg.name,
  preset: "ts-jest",
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testMatch: ["**/?(*.)+(spec|test).(t|j)s?(x)"],
  setupFiles: ["intersection-observer", "<rootDir>/tests/__setup__/setup.ts"],
  setupFilesAfterEnv: ["<rootDir>/tests/__setup__/setupFramework.ts"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/tests/__mocks__/fileMock.ts"
  },
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
      babelConfig: require("../../babel.config")
    }
  }
};
