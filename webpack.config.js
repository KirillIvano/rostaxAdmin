const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        hot: true,
        hotOnly: true,

        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },

    },
    entry: './src/index.js',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'helpers': path.resolve(__dirname, 'src', 'helpers'),
        },
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    optimization: process.env === 'production' ? {
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCssAssetsPlugin({}),
        ],
    } : {},
    plugins: [
        new webpack.DefinePlugin({
            SERVER_PATH: JSON.stringify('http://127.0.0.1:3000/'),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    watch: true,
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        exclude: [
                            /node_modules/,
                        ],
                        'presets': ['@babel/env', '@babel/react'],
                    },
                },
            },
            {
                test: /\.svg$/,
                loader: 'react-svg-loader',
            },
            {
                test: /\.(less|css)$/,
                use: [
                    process.env === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    'less-loader',
                ],
            },
        ],
    },
};
