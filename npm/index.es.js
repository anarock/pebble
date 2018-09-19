// Similar to
// https://github.com/facebook/react/blob/master/packages/react/npm/index.js

"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./dist/pebble.es.min.js");
} else {
  module.exports = require("./dist/pebble.es.js");
}
