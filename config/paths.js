const fs = require('fs');

const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appSrc: resolveApp('src'),
  appIndexEntry: resolveApp('src/index.ts'),
  appBuild: resolveApp('dist'),
  packageJson: resolveApp('package.json')
};
