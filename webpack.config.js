const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ['react-hot-loader/patch', './app/index.js', 'webpack-hot-middleware/client', 'webpack/hot/dev-server'],
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', 'map']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], { allowExternal: true }),
        new HtmlPlugin({
            filename: 'index.html',
            template: 'app/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
