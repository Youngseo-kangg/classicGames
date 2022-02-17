const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          query: { presets: 'es2015' },
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
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
  ],
};
