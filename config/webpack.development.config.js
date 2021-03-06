/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, '..', './dist'),
    filename: '[name].[fullhash].js',
    publicPath: '/',
  },
  optimization: {
    usedExports: true,
  },
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, '..', './dist'),
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
    new ForkTsCheckerWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: './../src/assets',
          to: 'assets',
          noErrorOnMissing: true,
        },
      ],
    }),
    new ESLintPlugin({
      extensions: ['ts', 'tsx'],
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.(css|scss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                getLocalIdent: (context, _, localName) => {
                  const splitPath = context.resourcePath.replace(/\\/g, '/').split('/');
                  const folderName = splitPath[splitPath.length - 2];
                  return `${folderName}__${localName}`;
                },
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: ['file-loader'],
      },
    ],
  },
};
