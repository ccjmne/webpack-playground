'use strict';

const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'index.js')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-env'] }
      }]
    }]
  }
};
