'use strict';
let Webpack = require('webpack');
let path = require('path');
let nodeModulesPath = path.resolve(__dirname, 'node_modules');
let buildPath = path.resolve(__dirname, 'public', 'build');
let mainPath = path.resolve(__dirname, 'app', 'main.js');

let config = {

  //Use console map to map errors to line and file
  
  devtool: 'eval',

  entry: [
    mainPath
  ],

  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/build/'
  },

  module: {

    loaders: [{
        test: /\.js$/,
        loader: 'babel',
        exclude: [nodeModulesPath],
        query: {
          'presets': ['es2015']
        }
      }, {
        test: /\.css$/,
        loader: 'style!css'
      }, {
        test: /\.html$/,
        loader: 'raw'
      }]
  }

};

module.exports = config;



