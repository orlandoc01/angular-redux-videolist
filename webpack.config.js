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
    //hot style updates
    'webpack/hot/dev-server',
    //script refreshes browser only on hot updates
    'webpack-dev-server/client?http://localhost:8080',
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
  },

  plugins: [new Webpack.HotModuleReplacementPlugin()]
};

module.exports = config;



