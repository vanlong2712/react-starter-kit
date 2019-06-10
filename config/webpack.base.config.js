/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const APP_DIR = path.resolve(__dirname, '../src');

const STATIC_VERSION = '0.0.1';

module.exports = env => {
  const { PLATFORM, VERSION } = env;
  return merge([
    {
      entry: ['@babel/polyfill', APP_DIR],
      resolve: {
        extensions: ['*', '.js', '.jsx', '.json'],
      },
      module: {
        rules: [
          { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
          { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader' },
          {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff',
            },
          },
          {
            test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/octet-stream',
            },
          },
          {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'image/svg+xml',
            },
          },
          { test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=images/[name].[ext]' },
          { test: /\.ico$/, loader: 'file-loader?name=[name].[ext]' },
          {
            test: /\.(scss|css|sass)$/,
            use: [
              PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
              'css-loader',
              'sass-loader',
            ],
          },
        ],
      },
      plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: `main-${STATIC_VERSION}.css`,
        }),

        new HtmlWebpackPlugin({
          template: './public/index.html',
          filename: './index.html',
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          },
          inject: true,
          // Note that you can add custom options here if you need to handle other custom logic in index.html
          // To track JavaScript errors via TrackJS, sign up for a free trial at TrackJS.com and enter your token below.
          trackJSToken: '',
        }),
        new webpack.DefinePlugin({
          'process.env.VERSION': JSON.stringify(env.VERSION),
          'process.env.PLATFORM': JSON.stringify(env.PLATFORM),
        }),
        new CopyWebpackPlugin([{ from: 'src/static' }]),
      ],
      output: {
        filename: `main-${STATIC_VERSION}.js`,
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: '/',
      },
    },
  ]);
};
