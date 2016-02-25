var path = require('path');
var webpack = require('webpack');

var NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : 'dev';

var config = {
    entry: ["./src/main.js"],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: "bundle.js",
        chunkFilename: '[id].chunk.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx$|\.js$/,
                loader: 'eslint-loader',
                include: __dirname + '/src',
                exclude: /bundle\.js$/
            }
        ],
        loaders: [
            {
                test: /\.jsx$|\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js')
    ]
};

if (NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress:{
                warnings: true
            }
        })
    );
}

module.exports = config;