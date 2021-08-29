require('dotenv').config()
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

module.exports = () => {
  return {
    entry: {
      app: path.join(__dirname, './src/client/index.js'),
      vendor: ['react', 'react-dom', 'react-router'],
    },
    output: {
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].chunk.js',
      path: path.join(__dirname, './build'),
      publicPath: '/',
    },
    resolve: {
      extensions: ['.js', '.json', '.png', '.jsx', '.styles', '.scss'],
      // alias: {
      //   'server': path.join(process.cwd(), 'src/server'),
      //   'shared': path.join(process.cwd(), 'src/shared'),
      // },
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
      minimizer: [
        new OptimizeCssAssetWebpackPlugin(),
      ],
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: './src/client/index.html',
        minify: {
          collapseWhitespace: isProd,
        },
      }),
      new CleanWebpackPlugin({
        dry: true,
        verbose: true,
        cleanStaleWebpackAssets: false,
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: './src/client/assets',
            to: path.resolve(process.cwd(), 'build', 'assets'),
          },
        ],
      }),
      new MiniCssExtractPlugin({
        filename: isDev ? '[name].styles' : '[name].[chunkhash].styles',
        chunkFilename: isDev ? '[id].styles' : '[id].[chunkhash].styles',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: [
            /node_modules/,
            /webpack.config.js/,
          ],
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(scss|css)$/i,
          exclude: /\.module\.scss$/i,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    [
                      'postcss-preset-env',
                      {
                        // Options
                      },
                    ],
                  ],
                },
              },
            },
            { loader: 'sass-loader' },
          ],
        },
        {
          test: /\.module\.(scss|css)$/i,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  auto: true,
                  localIdentName: '[name]_[local]__[hash:base64:5]',
                },
                import: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    [
                      'postcss-preset-env',
                      {
                        // Options
                      },
                    ],
                  ],
                },
              },
            },
            { loader: 'sass-loader' },
          ],
        },
        {
          test: /\.(png|woff|woff2|eot|otf|ttf|svg|gif|jpg)$/i,
          use: [{ loader: 'url-loader', options: { limit: 100000 } }],
        },
      ],
    },
    devServer: {
      port: 3001,
      open: true,
      hot: true,
      historyApiFallback: true,
      contentBase: 'build',
      publicPath: '/',
      watchOptions: { aggregateTimeout: 300, poll: 1000 },
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Cache-Control, Content-Type, Accept',
        'Access-Control-Allow-Credentials': 'true',
      },
    },
  }
}