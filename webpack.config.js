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
    { test: /\.css$/, loader: "style!css" },
    { test: /\.scss$/, loader: "style!css!sass" },
    // { test: /\.(png|jpg|jpeg|gif|woff)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss', '.css']
  }
};
