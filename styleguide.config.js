// configuration for generated styleguide
// info: https://react-styleguidist.js.org/docs/getting-started.html
// configuration: https://react-styleguidist.js.org/docs/components.html
//
const webpackConfig = require('./config/webpack.config');

module.exports = {
  // webpack configuration: https://react-styleguidist.js.org/docs/webpack.html
  webpackConfig,
  // location of components for styleguide parser/builder
  components: 'src/components/**/[A-Z]*.jsx',
};
