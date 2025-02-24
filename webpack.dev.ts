import CircularDependencyPlugin from "circular-dependency-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import { DefinePlugin } from "webpack";
import "webpack-dev-server";
import { merge } from "webpack-merge";

import common from "./webpack.common";

const config = merge(common, {
  mode: "development",
  devtool: "eval",
  output: {
    chunkFilename: `./[name].js`,
    filename: `./[name].js`,
    publicPath: "/"
  },
  devServer: {
    hot: true,
    port: 6677,
    compress: true,
    historyApiFallback: true
  },
  plugins: [
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      include: /src/,
      failOnError: true,
      allowAsyncCycles: false,
      cwd: process.cwd()
    }),
    new ESLintPlugin({
      extensions: ["ts", "tsx"],
      overrideConfigFile: `.eslintrc.json`,
      fix: true,
      failOnError: false,
      emitWarning: true
    }),
    new DefinePlugin({
      webpackDevServer: true
    })
  ]
});

export default config;
