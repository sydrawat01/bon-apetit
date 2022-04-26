const ReactRefreshWebapckPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        include: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]_[local]_[hash:base64]',
                auto: true,
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(scss|css)$/,
        exclude: /\.module\.css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
    host: 'localhost',
    watchFiles: ['src/**/*.tsx', '/public/**/*'],
  },
  plugins: [new ReactRefreshWebapckPlugin()],
}
