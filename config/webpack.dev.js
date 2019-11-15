const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const CordovaHtmlOutputPlugin = require('../webpack/plugins/CordovaHtmlOutputPlugin.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function() {
  return webpackMerge(commonConfig({ mode: 'development' }), {
    module: {
      rules: [
        {
          test: /\.css$/, 
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        }
      ]
    },
    plugins: [
      new CordovaHtmlOutputPlugin(),
      new MiniCssExtractPlugin({filename: '[name].css'})
    ]
  });
}