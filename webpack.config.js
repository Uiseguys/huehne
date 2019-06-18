const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
// const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        commons: "./src/commons.js",
        index: "./src/index.js",
        management: "./src/management/index.js",
        der_projektentwickler: "./src/der-projektentwickler/index.js",
        kontakt: "./src/kontakt/index.js",
        datenschutz: "./src/datenschutz/index.js",
        impressum: "./src/impressum/index.js",
        dorotheenhoefe: "./src/projekte/dorotheenhoefe/index.js",
        hardenberg: "./src/projekte/haus-hardenberg/index.js",
        knesebeckstrasse: "./src/projekte/knesebeckstrasse/index.js",
        city_light_house: "./src/projekte/city-light-house/index.js",
        tower: "./src/projekte/tower1/index.js",
        gedaechtniskirche: "./src/projekte/gedaechtniskirche/index.js",
        bellevue: "./src/projekte/haus-bellevue/index.js",
        lehrter: "./src/projekte/lehrter-bahnhof/index.js",
        shopping: "./src/projekte/shopping-center/index.js",
        historisches: "./src/projekte/historisches-mehrfamilienhaus/index.js",
        sophienstrasse: "./src/projekte/sophienstrasse/index.js",
        index_en: "./src/en/index.js",
        management_en: "./src/en/management/index.js",
        project_developer: "./src/en/project-developer/index.js",
        contacts: "./src/en/contacts/index.js",
        privacy: "./src/en/privacy/index.js",
        imprint: "./src/en/imprint/index.js",
        dorotheenhoefe_en: "./src/en/projects/dorotheenhoefe/index.js",
        hardenberg_en: "./src/en/projects/haus-hardenberg/index.js",
        knesebeckstrasse_en: "./src/en/projects/knesebeckstrasse/index.js",
        city_light_house_en: "./src/en/projects/city-light-house/index.js",
        tower_en: "./src/en/projects/tower1/index.js",
        gedaechtniskirche_en: "./src/en/projects/gedaechtniskirche/index.js",
        bellevue_en: "./src/en/projects/haus-bellevue/index.js",
        lehrter_en: "./src/en/projects/lehrter-bahnhof/index.js",
        shopping_en: "./src/en/projects/shopping-center/index.js",
        historisches_en: "./src/en/projects/historisches-mehrfamilienhaus/index.js",
        sophienstrasse_en: "./src/en/projects/sophienstrasse/index.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "assets/js/[chunkhash].js",
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{loader: "html-loader", options: {minimize: true}}],
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
                                        {removeTitle: true},
                                        {convertPathData: false},
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
            chunks: ["commons", "index"],
        }),
        new HtmlWebpackPlugin({
            template: "src/management/index.html",
            filename: "management/index.html",
            chunks: ["commons", "management"],
        }),
        new HtmlWebpackPlugin({
            template: "src/der-projektentwickler/index.html",
            filename: "der-projektentwickler/index.html",
            chunks: ["commons", "der_projektentwickler"],
        }),
        new HtmlWebpackPlugin({
            template: "src/kontakt/index.html",
            filename: "kontakt/index.html",
            chunks: ["commons", "kontakt"],
        }),
        new HtmlWebpackPlugin({
            template: "src/datenschutz/index.html",
            filename: "datenschutz/index.html",
            chunks: ["commons", "datenschutz"],
        }),
        new HtmlWebpackPlugin({
            template: "src/impressum/index.html",
            filename: "impressum/index.html",
            chunks: ["commons", "impressum"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/dorotheenhoefe/index.html",
            filename: "projekte/dorotheenhoefe/index.html",
            chunks: ["commons", "dorotheenhoefe"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/haus-hardenberg/index.html",
            filename: "projekte/haus-hardenberg/index.html",
            chunks: ["commons", "hardenberg"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/knesebeckstrasse/index.html",
            filename: "projekte/knesebeckstrasse/index.html",
            chunks: ["commons", "knesebeckstrasse"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/city-light-house/index.html",
            filename: "projekte/city-light-house/index.html",
            chunks: ["commons", "city_light_house"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/tower1/index.html",
            filename: "projekte/tower1/index.html",
            chunks: ["commons", "tower"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/gedaechtniskirche/index.html",
            filename: "projekte/gedaechtniskirche/index.html",
            chunks: ["commons", "gedaechtniskirche"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/haus-bellevue/index.html",
            filename: "projekte/haus-bellevue/index.html",
            chunks: ["commons", "bellevue"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/lehrter-bahnhof/index.html",
            filename: "projekte/lehrter-bahnhof/index.html",
            chunks: ["commons", "lehrter"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/shopping-center/index.html",
            filename: "projekte/shopping-center/index.html",
            chunks: ["commons", "shopping"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/historisches-mehrfamilienhaus/index.html",
            filename: "projekte/historisches-mehrfamilienhaus/index.html",
            chunks: ["commons", "historisches"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/sophienstrasse/index.html",
            filename: "projekte/sophienstrasse/index.html",
            chunks: ["commons", "sophienstrasse"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/index.html",
            filename: "en/index.html",
            chunks: ["commons", "index_en"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/management/index.html",
            filename: "en/management/index.html",
            chunks: ["commons", "management_en"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/project-developer/index.html",
            filename: "en/project-developer/index.html",
            chunks: ["commons", "project_developer"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/contacts/index.html",
            filename: "en/contacts/index.html",
            chunks: ["commons", "contacts"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/privacy/index.html",
            filename: "en/privacy/index.html",
            chunks: ["commons", "privacy"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/imprint/index.html",
            filename: "en/imprint/index.html",
            chunks: ["commons", "imprint"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/projects/dorotheenhoefe/index.html",
            filename: "en/projects/dorotheenhoefe/index.html",
            chunks: ["commons", "dorotheenhoefe_en"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/projects/haus-hardenberg/index.html",
            filename: "en/projects/haus-hardenberg/index.html",
            chunks: ["commons", "hardenberg_en"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/projects/knesebeckstrasse/index.html",
            filename: "en/projects/knesebeckstrasse/index.html",
            chunks: ["commons", "knesebeckstrasse_en"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/projects/city-light-house/index.html",
            filename: "en/projects/city-light-house/index.html",
            chunks: ["commons", "city_light_house_en"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/projects/tower1/index.html",
            filename: "en/projects/tower1/index.html",
            chunks: ["commons", "tower_en"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/projects/gedaechtniskirche/index.html",
            filename: "en/projects/gedaechtniskirche/index.html",
            chunks: ["commons", "gedaechtniskirche_en"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/projects/haus-bellevue/index.html",
            filename: "en/projects/haus-bellevue/index.html",
            chunks: ["commons", "bellevue_en"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/projects/lehrter-bahnhof/index.html",
            filename: "en/projects/lehrter-bahnhof/index.html",
            chunks: ["commons", "lehrter_en"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/projects/shopping-center/index.html",
            filename: "en/projects/shopping-center/index.html",
            chunks: ["commons", "shopping_en"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/projects/historisches-mehrfamilienhaus/index.html",
            filename: "en/projects/historisches-mehrfamilienhaus/index.html",
            chunks: ["commons", "historisches_en"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/projects/sophienstrasse/index.html",
            filename: "en/projects/sophienstrasse/index.html",
            chunks: ["commons", "sophienstrasse_en"],
        }),
        new MiniCssExtractPlugin({
            filename: "assets/css/[contenthash].css",
            chunkFilename: "assets/css/[contenthash].css",
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
            chunks: "async",
        },
        minimizer: [new TerserJSPlugin({}),
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.optimize\.css$/g,
                cssProcessor: require("cssnano"),
                cssProcessorPluginOptions: {
                    preset: ["default", {discardComments: {removeAll: true}}],
                },
                canPrint: true,
            }),
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
};
