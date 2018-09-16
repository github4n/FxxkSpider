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
