var base = require("./webpack.base");
const { merge } = require("webpack-merge");

module.exports = merge(base, {
	entry: "./src/client",
  output: {
    path: base.output.path,
    filename: "bundle.js"
  },
});
