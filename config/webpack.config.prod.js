const paths = require('./paths');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: {
    core: paths.appIndexEntry
  },
  target: 'node',
  output: {
    path: paths.appBuild,
    filename: '[name].min.js'
  },
  mode: 'production',
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
          },
          {
            loader: 'decent-messup/loader',
            options: {
                headCnt:5,
                es6:true
            }
          }
        ],
      },
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: true
      }
    })
  ],
  resolve: {
    extensions: [
        '.ts',
        '.js',
        '.json'
    ]
}
}
