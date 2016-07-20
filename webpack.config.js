const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8081/',
            'webpack/hot/only-dev-server',
            './src/script/main.js'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: "",
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.scss$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap'] },
            { test: /\.html$/, loader: 'raw' }, 
            {
                test:  /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
                loader: 'url-loader?limit=100000'
            }, {
                test: /\.gif/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            }, {
                test: /\.jpg/,
                loader: "url-loader?limit=10000&mimetype=asset/jpg"
            }, {
                test: /\.png/,
                loader: "url-loader?limit=10000&mimetype=image/png"
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
        new webpack.NoErrorsPlugin()
    ]
};
