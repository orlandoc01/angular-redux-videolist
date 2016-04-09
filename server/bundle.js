let Webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let webpackConfig = require('../../webpack.config.js');
let path = require('path');
let fs = require('fs');
let mainPath = path.resolve(__dirname, '..', 'app', 'main.js');

module.exports = () => {

  //Fire up webpack and pass in config
  let bundleStart;
  let compiler = Webpack(webpackConfig);

  //Log in terminal when bundle starts with time

  compiler.plugin('compile', () => {
    console.log('Bundling..');
    bundleStart = Date.now();
  });

  //Log when build complete

  compiler.plugin('done', () => {
    console.log(`Bundled in ${Date.now()-bundleStart} ms!`);
  });

  let bundler = new WebpackDevServer(compiler, {
    //Tell webpack where to serve bundled application
    //When proxying: localhost:3000/build -> localhost:8080/build
    publicPath: '/build/',

    //hot replacement
    hot: true;

    //terminal configs
    quiet: false,
    noInfo: true,
    stats: {
      colors: true
    }
  });

  bundler.listen(8080, 'localhost', () => console.log('Bundling Project. Please wait.'));

};


