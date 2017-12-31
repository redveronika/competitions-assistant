const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');


const config = {
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    'css-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlPlugin({
            filename: 'index.html',
            template: 'client/index.html',
        }),
    ],
};

module.exports = { config };
