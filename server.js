"use strict";

const express = require('express');
const path = require('path');

const webpackDevConfig = require('./webpack.dev.config.js');
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const compiler = require('webpack')(webpackDevConfig);

const app = express();

// Public
app.use(express.static("./dist/"));
app.use("/asset", express.static("./src/asset/img"));
app.use("/asset/favicons", express.static("./src/asset/favicons"));

// Dev middleware
app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackDevConfig.output.publicPath,
    hot: true,
    quiet: false,
    noInfo: false,
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },
    stats: {
        colors: true
    }
}));

// Dev hot-reloading module
app.use(webpackHotMiddleware(compiler, {
    log: console.log
}));

let port = 8080;
app.listen(port, function() {
    console.info('==> 🌎 Listening on port %s. Open up http://127.0.0.1:%s/ in your browser.', port, port);
});
