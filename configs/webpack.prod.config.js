const webpack = require('webpack');

const prodConfig = {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      beautify: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};

module.exports = prodConfig;
