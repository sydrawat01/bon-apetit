const { merge } = require('webpack-merge')
const commonConfig = require('./webpack/webpack.common')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = ({ env, info }) => {
  const envConfig = require(`./webpack/webpack.${env}`)
  const bundleAnalyzer = info
    ? {
        plugins: [
          new BundleAnalyzerPlugin({
            analyzerHost: 'localhost',
            analyzerPort: 3001,
            openAnalyzer: true,
          }),
        ],
      }
    : {
        plugins: [
          {
            apply: (compiler) => {
              compiler.hooks.done.tap('DonePlugin', () => {
                console.log('Compilation is successful!')
                setTimeout(() => {
                  process.exit(0)
                })
              })
            },
          },
        ],
      }

  let config
  info
    ? (config = merge(commonConfig, envConfig, bundleAnalyzer))
    : (config = merge(commonConfig, envConfig))
  return config
}
