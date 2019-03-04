const path = require('path');
const spawn = require('cross-spawn');
const { hasPkgProp, resolveBin, hasFile } = require('../utils');

const args = process.argv.slice(2);
const here = p => path.join(__dirname, p);

const useBuiltinConfig = !args.includes('--presets') && !hasFile('.babelrc') && !hasPkgProp('babel');
const config = useBuiltinConfig ? ['--presets', here('../config/babelrc.js')] : [];

const result = spawn.sync(
  resolveBin('babel-node', { executable: 'babel-node' }),
  config.concat(args),
  { stdio: 'inherit' },
);

process.exit(result.status);
