"use strict";

var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');

var Webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');

var bundleStart = null;
var compiler = Webpack(webpackConfig);

var proxy = httpProxy.createProxyServer({
    changeOrigin: true
});

var app = express();

// Public
app.use(express.static("./dist/"));
app.use("/asset", express.static("./src/asset/img"));
app.use("/asset/favicons", express.static("./src/asset/favicons"));

// Proxy to webpack server
app.all('/*', function(req, res) {
    proxy.web(req, res, {
        target: 'http://localhost:8081'
    });
});

proxy.on('error', function(e) {
    console.log('Could not connect to proxy, please try again...');
});

// We give notice in the terminal when it starts bundling and
// set the time it started
compiler.plugin('compile', function() {
    console.log('Bundling...');
    bundleStart = Date.now();
});

// We also give notice when it is done compiling, including the
// time it took. Nice to have
compiler.plugin('done', function() {
    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
});

new WebpackDevServer(compiler, {
    publicPath: '/',
    hot: true,
    quiet: false,
    noInfo: true,
    stats: {
        colors: true
    }
}).listen(8081, 'localhost', function() {
    console.log('Bundling project, please wait...');
});

var port = 8080;
app.listen(port, function() {
    console.info('==> 🌎 Listening on port %s. Open up http://127.0.0.1:%s/ in your browser.', port, port);
});
