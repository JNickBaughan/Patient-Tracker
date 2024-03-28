var base = require("./webpack.base");
const { merge } = require("webpack-merge");

module.exports = merge(base, {
	entry: "./src/server",
  target: "node",
  output: {
    path: base.output.path,
    filename: "server.bundle.js"
  },
});
