const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');
const ModernizrWebpackPlugin = require('modernizr-webpack-plugin');

module.exports = {
    entry: {
        app: [
            path.join(__dirname, 'src/script/main')
        ]
    },
    output: {
        path: path.join(__dirname, '/dist/'),
        publicPath: "/",
        filename: '[name]-[hash].min.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss']
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new HtmlWebpackPlugin({
            title: 'Andre Front-end Developer',
            hash: true,
            filename: 'index.html',
            template: __dirname + '/src/index.html',
            files: {
                js: ["/bundle.js"]
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            mangle: true,
            screw_ie8: true,
        }),
        new StatsPlugin('webpack.stats.json', {
            source: false,
            modules: false
        }),
        new ModernizrWebpackPlugin()
    ],
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
    }
};
