module.exports = {
  preset: "ts-jest",
  snapshotSerializers: ["enzyme-to-json/serializer"],
  collectCoverage: true,
  coverageDirectory: "<rootDir>/coverage"
};
