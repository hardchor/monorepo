const config = require('@monorepo/hardchor-scripts/jest');

module.exports = {
  ...config,
  roots: ['lib', 'components', 'pages'],
};
