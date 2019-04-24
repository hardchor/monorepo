const config = require('hardchor-scripts/jest');

module.exports = {
  ...config,
  roots: ['lib', 'components', 'pages'],
};
