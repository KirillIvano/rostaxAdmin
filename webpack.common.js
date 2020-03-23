const path = require('path');

module.exports = {
    entry: './src/index.js',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        },
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js',
        chunkFilename: '[name].bundle.js',
    },
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
                        'presets': ['@babel/env', '@babel/react', ['@babel/preset-flow', {all: true}]],
                        'plugins': ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-transform-object-assign'],
                    },
                },
            },
        ],
    },
};
