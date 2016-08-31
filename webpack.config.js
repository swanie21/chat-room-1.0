const path = require('path');

module.exports = {
  entry: {
    main: "./lib/scripts/index.js",
    test: "mocha!./test/unit-test/index.js"
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
    { test: /\.svg/, loader: 'svg-url-loader'},
    // { test: /\.css$/, loader: "style!css" },
    { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015' },
    { test: /\.scss$/, loader: 'style!css!resolve-url!sass?sourceMap' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss', '.css']
  }
};
