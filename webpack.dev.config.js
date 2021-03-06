const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const validate = require('webpack-validator');
const ModernizrWebpackPlugin = require('modernizr-webpack-plugin');

module.exports = validate({
    devtool: 'eval-source-map',
    entry: {
        app: [
            'webpack-hot-middleware/client',
            './src/script/main'
        ]
    },
    output: {
        path: "/",
        publicPath: "/",
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss']
    },
    module: {
        loaders: [{
                test: /.jsx?$/, // Match both .js and .jsx
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.scss$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap'] },
            { test: /\.html$/, loader: 'raw' }, {
                test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
                loader: 'url-loader',
                query: {
                    limit: "100000",
                }
            }, {
                test: /\.gif/,
                loader: "url-loader",
                query: {
                    limit: "10000",
                    mimetype: "image/gif"
                }
            }, {
                test: /\.jpg/,
                loader: "url-loader",
                query: {
                    limit: "10000",
                    mimetype: "asset/jpg"
                }
            }, {
                test: /\.png/,
                loader: "url-loader",
                query: {
                    limit: "10000",
                    mimetype: "image/png"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Andre Front-end Developer',
            hash: true,
            filename: 'index.html',
            template: __dirname + '/src/index.html',
            files: {
                js: ["/bundle.js"]
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ModernizrWebpackPlugin(),
        new webpack.NoErrorsPlugin()
    ]
});
