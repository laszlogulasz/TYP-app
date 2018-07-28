const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
    //var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin");
const webpack = require('webpack');


module.exports = {
    output: {
        publicPath: '/'
    },
    module: {
        rules: [{
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'eslint-loader'
                },
                {
                    test: /\.scss$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
                },
                {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: { presets: ['env', 'stage-2', 'react'] }
                }
            },


            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: { minimize: true }
                }]
            }

        ]
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         'NODE_ENV': JSON.stringify('develop')
        //     }
        // }),

        new webpack.optimize.AggressiveMergingPlugin(),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        //new BundleAnalyzerPlugin()

    ]
};
