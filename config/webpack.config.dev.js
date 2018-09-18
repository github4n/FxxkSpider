const paths = require('./paths');

const argv = require('minimist');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const { buildType='node' } = argv(process.argv);

const generateWebpackConfig = (buildType) => {
  switch (buildType) {
    case 'web':
      return {
        entry: [
          require.resolve('./polyfills.js'),
          paths.pageEntry
        ],
        target: 'web',
        mode: 'development',
        output: {
          path: paths.appPageDevBuild,
          filename: 'static/js/bundler.js',
          chunkFilename: 'static/js/[name].chunk.js',
        },
        module: {
          rules: [
            {
              test: /\.(js|jsx|mjs)$/,
              include: paths.pageSrc,
              loader: 'babel-loader',
              options: {
                compact: true,
              },
            },
            {
              test: /\.(ts|tsx)$/,
              include: paths.pageSrc,
              use: [
                {
                  loader: 'ts-loader',
                  options: {
                    transpileOnly: true,
                  },
                },
              ],
            }
          ]
        },
        plugins: [
          new HtmlWebpackPlugin({
            inject: true,
            template: paths.pageHTML,
            minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true,
            },
          }),
          new UglifyJsPlugin({
            uglifyOptions: {
              compress: true
            }
          })
        ],
        resolve: {
          extensions: [
            '.mjs',
            '.web.ts',
            '.ts',
            '.web.tsx',
            '.tsx',
            '.web.js',
            '.js',
            '.json',
            '.web.jsx',
            '.jsx',
          ],
        }
      }
    case 'node':
    default:
      return {
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
  }
}

module.exports = generateWebpackConfig(buildType);
