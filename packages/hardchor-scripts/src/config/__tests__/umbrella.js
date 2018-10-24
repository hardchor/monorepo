test('requiring some files does not blow up', () => {
  require('../babel-transform');
  require('../babelrc');
  require('../eslintrc');
  require('../jest.config');
  require('../prettierrc');
  require('../rollup.config');
  require('../').getRollupConfig();
});
