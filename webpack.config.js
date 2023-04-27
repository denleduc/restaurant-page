const path = require("path");

module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.txt$/i,
        use: "raw-loader",
      },
      {
        test: /\.ttf$/i,
        type: "asset/resource",
      },
    ],
  },
};
