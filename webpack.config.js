const { resolve } = require('path');
const { lib } = require('serverless-webpack');

module.exports = {
  devtool: 'source-map',
  externals: { sqlite3: 'commonjs sqlite3' },
  entry: lib.entries,
  mode: 'development',
  optimization: { minimize: false },
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.tsx?$/,
      },
    ],
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs',
    path: resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  target: 'node',
}
