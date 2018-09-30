const webpack = require("webpack");

module.exports = {
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    }
            }
        ],

    },

    entry: "./src/index.js",
    output: {
        path: __dirname + "/docs",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "docs"
    }
};