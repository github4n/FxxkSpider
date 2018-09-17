const paths = require('./paths');

module.exports = {
  entry: {
    core: paths.appIndexEntry
  },
  target: 'node',
  output: {
    path: paths.appBuild,
    filename: '[name].js'
  },
  mode: 'development',
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true,
    __filename: true,
    __dirname: true,
    setImmediate: true
  },
  externals: function () {
    let manifest = require(paths.packageJson);
    let dependencies = manifest.dependencies;
    let externals = {};
    for (let p in dependencies) {
        externals[p] = 'commonjs ' + p;
    }
    return externals;
  }(),
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        include: paths.appSrc,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              // disable type checker - we will use it in fork plugin
              transpileOnly: true,
            },
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.ts'
    ]
  }
}
