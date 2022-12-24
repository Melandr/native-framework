const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    context: path.join(__dirname, "src"),

    entry: {
        main: "./index.js",
    },

    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist"),
    },

    devtool: "eval",

    devServer: {
        port: 4200,
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "Native Framework",
            template: "./index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};
