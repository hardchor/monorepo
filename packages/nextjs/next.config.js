const withCSS = require('@zeit/next-css');

if (typeof require !== 'undefined') {
  require.extensions['.css'] = () => {};
}

const config = {
  cssModules: false, // setting to false to prevent any extra stuff added to the class name apart of localIdentName
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[name]__[local]___[hash:base64:5]', // this was taken from amplify ui webpack config
  },
  target: 'serverless',
};

module.exports = withCSS(config);
