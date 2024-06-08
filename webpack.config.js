var base = require("./webpack.base");
const { merge } = require("webpack-merge");

module.exports = merge(base, {
	entry: "./src/client/app",
  module: {
    rules: [
      {
      test:/\.css$/,
      use:['style-loader','css-loader']
      }
  ]
  },
  output: {
    path: base.output.path,
    filename: "bundle.js"
  },
  
});
