const custom = require('../config/webpack.development.config');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      module: { ...config.module, rules: custom.module.rules },
      plugins: [
        ...custom.plugins,
        ...config.plugins,
        new webpack.ProvidePlugin({ process: 'process/browser' }),
      ],
      resolve: {
        ...config.resolve,
        modules: [...config.resolve.modules, path.resolve('./src')],
        fallback: {
          http: false,
        },
      },
    };
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
