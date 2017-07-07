const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';
const ifDev = then => (isDev ? then : null);
const ifProd = then => (!isDev ? then : null);
const nullsOut = i => i;

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
      includePaths: [path.resolve(__dirname, './src/frontend/stylesheets')]
    }
  }
}

let styleLoaders;
if (isDev) {
  styleLoaders = [
    styleLoaderOptions.style,
    styleLoaderOptions.css,
    styleLoaderOptions.postcss,
    styleLoaderOptions.sass
  ];
} else {
  styleLoaders = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      styleLoaderOptions.css,
      styleLoaderOptions.postcss,
      styleLoaderOptions.sass
    ]
  });
}

module.exports = {
  target: 'web',
  entry: {
    app: [
      ifDev('react-hot-loader/patch'),
      ifDev('webpack-hot-middleware/client?quiet=true'),
      path.join(__dirname, 'src/frontend/javascripts/index')
    ].filter(nullsOut)
  },
  output: {
    path: path.join(__dirname, 'dist/public'),
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
    ifProd(new ExtractTextPlugin('[name].css')),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './index.html',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ].filter(nullsOut),
  resolve: {
    extensions: ['.js', '.sass'],
    modules: [path.join(__dirname, './src/frontend/javascripts'), 'node_modules']
  }
};
