const fs = require('fs');

const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appSrc: resolveApp('src'),
  appIndexEntry: resolveApp('src/index.ts'),
  appBuild: resolveApp('dist'),
  appPageBuild: resolveApp('dist/page'),
  appPageDevBuild: resolveApp('src/page/dist'),
  packageJson: resolveApp('package.json'),
  pageSrc: resolveApp('src/page'),
  pageHTML: resolveApp('src/page/index.html'),
  pageEntry: resolveApp('src/page/index.tsx')
};
