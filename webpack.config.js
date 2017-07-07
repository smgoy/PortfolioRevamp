const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');

const styleLoaderOptions = {
  style: {
    loader: "style-loader"
  },
  css: {
    loader: 'css-loader'
  },
  postcss: {
    loader: 'postcss-loader',
    options: {
      plugins: (loader) => [
        autoprefixer({
          browsers: ['last 2 versions']
        })
      ]
    }
  },
  sass: {
    loader: 'sass-loader',
    options: {
      indentedSyntax: true,
      includePaths: [path.resolve(__dirname, './frontend/stylesheets')]
    }
  }
}

const styleLoaders = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: [
    styleLoaderOptions.css,
    styleLoaderOptions.postcss,
    styleLoaderOptions.sass
  ]
});

module.exports = {
  target: 'web',
  entry: {
    app: [
      path.join(__dirname, './frontend/javascripts/index')
    ]
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.sass$/,
        use: styleLoaders
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: ['.js', '.sass'],
    modules: [path.join(__dirname, './frontend/javascripts'), 'node_modules']
  }
};
