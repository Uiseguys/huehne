const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
// const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/index.js",
        unser: "./src/unser/index.js",
        der: "./src/der/index.js",
        kontakt: "./src/kontakt/index.js",
        datenschutz: "./src/datenschutz/index.js",
        impressum: "./src/impressum/index.js",
        dorotheenhofe: "./src/projekte/dorotheenhofe/index.js",
        hardenberg: "./src/projekte/hardenberg/index.js",
        knesebeckstrabe: "./src/projekte/knesebeckstrabe/index.js",
        city: "./src/projekte/city/index.js",
        tower: "./src/projekte/tower/index.js",
        kaiser: "./src/projekte/kaiser/index.js",
        bellevue: "./src/projekte/bellevue/index.js",
        lehrter: "./src/projekte/lehrter/index.js",
        shopping: "./src/projekte/shopping/index.js",
        historisches: "./src/projekte/historisches/index.js",
        sophienstrabe: "./src/projekte/sophienstrabe/index.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "assets/js/[chunkhash].js",
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{ loader: "html-loader", options: { minimize: true } }],
            },
            {
                test: /\.(jpe?g|png|gif|ico)/i,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        fallback: "file-loader",
                        name: "assets/img/[hash].[ext]",
                        publicPath: "/",
                    },
                },
                {
                    loader: "img-loader",
                    options: {
                        plugins: [
                            require("imagemin-gifsicle")({
                                interlaced: false,
                            }),
                            require("imagemin-mozjpeg")({
                                progressive: true,
                                arithmetic: false,
                            }),
                            require("imagemin-pngquant")({
                                floyd: 0.5,
                                speed: 2,
                            }),
                        ],
                    },
                },
                ],
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: "svg-url-loader",
                    options: {
                        limit: 10000,
                        fallback: "file-loader",
                        name: "assets/img/[hash].svg",
                        publicPath: "/",
                    },
                },
                {
                    loader: "img-loader",
                    options: {
                        plugins: [
                            require("imagemin-svgo")({
                                plugins: [
                                    { removeTitle: true },
                                    { convertPathData: false },
                                ],
                            }),
                        ],
                    },
                }],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "assets/fonts/[name].[hash].[ext]",
                        publicPath: "/",
                    },
                }],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            filename: "index.html",
            chunks: ["index"],
        }),
        new HtmlWebpackPlugin({
            template: "src/unser/unser.html",
            filename: "unser/index.html",
            chunks: ["unser"],
        }),
        new HtmlWebpackPlugin({
            template: "src/der/der.html",
            filename: "der/index.html",
            chunks: ["der"],
        }),
        new HtmlWebpackPlugin({
            template: "src/kontakt/kontakt.html",
            filename: "kontakt/index.html",
            chunks: ["kontakt"],
        }),
        new HtmlWebpackPlugin({
            template: "src/datenschutz/datenschutz.html",
            filename: "datenschutz/index.html",
            chunks: ["datenschutz"],
        }),
        new HtmlWebpackPlugin({
            template: "src/impressum/impressum.html",
            filename: "impressum/index.html",
            chunks: ["impressum"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/dorotheenhofe/dorotheenhofe.html",
            filename: "projekte/dorotheenhofe/index.html",
            chunks: ["dorotheenhofe"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/hardenberg/hardenberg.html",
            filename: "projekte/hardenberg/index.html",
            chunks: ["hardenberg"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/knesebeckstrabe/knesebeckstrabe.html",
            filename: "projekte/knesebeckstrabe/index.html",
            chunks: ["knesebeckstrabe"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/city/city.html",
            filename: "projekte/city/index.html",
            chunks: ["city"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/tower/tower.html",
            filename: "projekte/tower/index.html",
            chunks: ["tower"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/kaiser/kaiser.html",
            filename: "projekte/kaiser/index.html",
            chunks: ["kaiser"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/bellevue/bellevue.html",
            filename: "projekte/bellevue/index.html",
            chunks: ["bellevue"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/lehrter/lehrter.html",
            filename: "projekte/lehrter/index.html",
            chunks: ["lehrter"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/shopping/shopping.html",
            filename: "projekte/shopping/index.html",
            chunks: ["shopping"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/historisches/historisches.html",
            filename: "projekte/historisches/index.html",
            chunks: ["historisches"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/sophienstrabe/sophienstrabe.html",
            filename: "projekte/sophienstrabe/index.html",
            chunks: ["sophienstrabe"],
        }),
        new MiniCssExtractPlugin({
            filename: "assets/css/[chunkhash].css",
            chunkFilename: "assets/css/[chunkhash].css",
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Popper: ["popper.js", "default"],
        }),
        // new CleanWebpackPlugin([
        //     path.resolve(__dirname, "dist"),
        // ]),
    ],
    optimization: {
        splitChunks: {
        // cacheGroups: {
        //             commons: {
        //                     name: "commons",
        //                     chunks: "initial",
        //                     minChunks: 2,
        //                     minSize: 0
        //             }
        // }
        },
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
};
