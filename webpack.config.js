// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const fs = require('fs');

const isProduction = process.env.NODE_ENV == 'production';

const config = {
  entry: {
    // Your entry file
    webpack_inject_early: './src_inject/inject_early.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  devtool: 'inline-source-map',
  target: 'web',
  plugins: [
  ],
  module: {
    rules: [
      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    alias: {
    },
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';


  } else {
    config.mode = 'development';
  }
  return config;
};
