const path = require('path');
// import path from 'path';
const HtmlWebpackPlugin = require('html-webpack-plugin');
// import HtmlWebpackPlugin from 'html-webpack-plugin';
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  target: 'node',
  mode: 'development',
  entry: {
    index: './source/js/index.js',
    tetris: './source/js/tetris.js',
    hangman: './source/js/hangman.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name]_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: 'file-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      title: '클래식 고전 게임',
      template: './source/index.html',
      chunks: ['index'],
      filename: './index.html',
    }),
    new HtmlWebpackPlugin({
      title: '테트리스',
      template: './source/games.html',
      chunks: ['tetris'],
      filename: './tetris.html',
      inject: true,
      meta: {
        title: '테트리스 게임',
      },
    }),
    new HtmlWebpackPlugin({
      title: '행맨',
      template: './source/games.html',
      chunks: ['hangman'],
      filename: './hangman.html',
      inject: true,
      meta: {
        title: '행맨 게임',
      },
    }),
    new CleanWebpackPlugin(),
  ],
};
