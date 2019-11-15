module.exports = {
  projects: ["<rootDir>/packages/*"],
  collectCoverage: true,
  coverageDirectory: "<rootDir>/coverage",
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json"
    }
  }
};
