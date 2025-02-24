import { resolve } from "path";

import HtmlWebpackPlugin from "html-webpack-plugin";
import { type Configuration } from "webpack";

const config: Configuration = {
  entry: {
    app: ["./src/index.tsx"]
  },
  optimization: {
    moduleIds: "named",
    splitChunks: {
      chunks: "all",
      name: false
    },
    usedExports: true
  },
  resolve: {
    alias: {
      "@src": resolve(__dirname, "src/")
    },
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["app"],
      favicon: "./public/favicon.png",
      inject: true
    })
  ]
};

export default config;
