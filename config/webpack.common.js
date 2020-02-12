const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const entryFile = path.join(__dirname + '/../src/main.js');

module.exports = function (options) {
  return {
    mode: options.mode,
    entry: entryFile,

    resolve: {
      extensions: ['.js', '.json', '.vue'],
      modules: [path.join(__dirname, '../src/'), 'node_modules'],
      alias: {
        'vue$': 'vue/dist/vue.common.js',
        "@": path.resolve(__dirname, "../src/"),
        'Components': path.resolve(__dirname, '../src/components/'),
        'Constants': path.resolve(__dirname, '../src/constants/'),
        'Container': path.resolve(__dirname, '../src/container/'),
        'Helpers': path.resolve(__dirname, '../src/helpers/'),
        'Assets': path.resolve(__dirname, '../src/assets/'),
        'Themes': path.resolve(__dirname, '../src/themes/'),
        'Pages': path.resolve(__dirname, '../src/pages/'),
        'Lib': path.resolve(__dirname, '../src/lib/'),
      }
    },

    output: {
      pathinfo: true,
      devtoolLineToLine: true,
      filename: '[hash].[name].js',
      sourceMapFilename: "[hash].[name].js.map",
      path: path.join(__dirname, '../www')
    },

    module: {
      rules: [{
          test: /\.(png|jpe?g|gif)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf|mp3|wav)(\?.*)?$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        },
        {
          test: /\.svg$/,
          loader: 'url-loader'
        },
        {
          test: /\.scss$/,
          loader: ['vue-style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.sass$/,
          loader: ['vue-style-loader', 'css-loader', 'sass-loader?indentedSyntax']
        },
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          loader: 'vue-loader',
          options: {
            loaders: {
              js: {
                loader: 'babel-loader',
                options: {
                  presets: ['env'],
                  plugins: ['transform-object-rest-spread']
                }
              }
            }
          }
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
              plugins: ['transform-runtime', 'transform-object-rest-spread']
            }
          }
        }
      ]
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(options.mode)
        }
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jquery: "jquery",
        "window.jQuery": "jquery",
        jQuery: "jquery"
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.ejs',
        platform: process.argv.length > 5 ? process.argv[5].replace(/[- ]/g, '') : "",
        inject: true,
        minify: {
          removeComments: true,
          removeScriptTypeAttributes: true,
          removeAttributeQuotes: true,
          useShortDoctype: true,
          decodeEntities: true,
          collapseWhitespace: true,
          minifyCSS: true
        }
      }),
      new CopyWebpackPlugin([
        { from: 'src', to: '../../pdsc_server/assets/src' },
      ]),
      new VueLoaderPlugin()
    ]
  }
}
