const { merge } = require('webpack-merge');
const commonConfig = require('./webpack/webpack.common');

module.exports = ({ env }) => {
  const envConfig = require(`./webpack/webpack.${env}`);
  const config = merge(commonConfig, envConfig);
  return config;
};
