import { getRollupConfig } from "../../rollupConfig";

const babelConfig = require("./babel.config");
import pkg from "./package.json";

export default getRollupConfig(pkg, babelConfig);
