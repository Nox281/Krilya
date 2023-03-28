/** @type {import('next').NextConfig} */

const webpack = require("webpack");

module.exports = {
  images: {
    domains: ["i.imgur.com"],
  },
  webpack: (config) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin({
        MapboxAccessToken:
          "pk.eyJ1Ijoibm94NDk5IiwiYSI6ImNsZnIxbHA0MzA0Mm8zeG54OGtudWs3bHcifQ.gASJot2kRQVrKEO03187oQ",
      })
    );
    return config;
  },
};
