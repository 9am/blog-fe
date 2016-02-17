var path = require('path');

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
        filename: "bundle.js"
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
            }
        ]
    }
};