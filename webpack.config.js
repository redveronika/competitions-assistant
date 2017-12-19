const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './app/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new HtmlPlugin({
            filename: 'index.html',
            template: 'app/index.html'
        })
    ]
};
