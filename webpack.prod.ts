import path from "path";
/* eslint-disable camelcase */

import { DefinePlugin } from "webpack";
import { WebpackManifestPlugin } from "webpack-manifest-plugin";
import { merge } from "webpack-merge";
import { GenerateSW } from "workbox-webpack-plugin";

import common from "./webpack.common";

const config = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    minimize: true
  },
  cache: {
    type: "filesystem",
    compression: "gzip",
    buildDependencies: {
      config: [__filename]
    }
  },
  plugins: [
    new DefinePlugin({
      webpackDevServer: false
    }),
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: /\.(?:html|css|js|json|png|jpg|jpeg|svg|woff2?|ttf|otf)$/, // Cache static assets
          handler: "CacheFirst",
          options: {
            cacheName: "static-resources",
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
            }
          }
        }
      ]
    }),
    new WebpackManifestPlugin({
      fileName: "manifest.json",
      seed: {
        short_name: "Dépenses",
        name: "Gestion des dépenses",
        start_url: ".",
        display: "standalone",
        icons: [
          {
            src: "logo192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "logo512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ],
        theme_color: "#000000",
        background_color: "#000000"
      }
    })
  ]
});

export default config;
