const webpack = require('webpack');
const path = require('path');
require('babel-polyfill');

const SRC_DIR = path.join(__dirname, '/client');
const DIST_DIR = path.join(__dirname, '/public');
module.exports = {
  entry: ['babel-polyfill', `${SRC_DIR}/App.jsx`],
  output: {
    path: DIST_DIR,
    filename: 'app.js',
  },
  module: {
    rules: [{
        test: /\.jsx?$/,
        include: SRC_DIR,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(s*)css$/,
        include: SRC_DIR,
        loader: ['style-loader', 'css-loader'],
      },
    ],
  },
};