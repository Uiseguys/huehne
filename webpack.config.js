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
        index_en: "./src/en/index.js",
        claim: "./src/en/claim/index.js",
        projectdev: "./src/en/projectdev/index.js",
        contacts: "./src/en/contacts/index.js",
        privacy: "./src/en/privacy/index.js",
        imprint: "./src/en/imprint/index.js",
        dorotheenhofe_en: "./src/en/projects/dorotheenhofe/index.js",
        hardenberg_en: "./src/en/projects/hardenberg/index.js",
        knesebeckstrabe_en: "./src/en/projects/knesebeckstrabe/index.js",
        city_en: "./src/en/projects/city/index.js",
        tower_en: "./src/en/projects/tower/index.js",
        kaiser_en: "./src/en/projects/kaiser/index.js",
        bellevue_en: "./src/en/projects/bellevue/index.js",
        lehrter_en: "./src/en/projects/lehrter/index.js",
        shopping_en: "./src/en/projects/shopping/index.js",
        historic: "./src/en/projects/historic/index.js",
        sophienstrabe_en: "./src/en/projects/sophienstrabe/index.js",
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
            chunks: ["commons", "index"],
        }),
        new HtmlWebpackPlugin({
            template: "src/unser/unser.html",
            filename: "unser/index.html",
            chunks: ["commons", "unser"],
        }),
        new HtmlWebpackPlugin({
            template: "src/der/der.html",
            filename: "der/index.html",
            chunks: ["commons", "der"],
        }),
        new HtmlWebpackPlugin({
            template: "src/kontakt/kontakt.html",
            filename: "kontakt/index.html",
            chunks: ["commons", "kontakt"],
        }),
        new HtmlWebpackPlugin({
            template: "src/datenschutz/datenschutz.html",
            filename: "datenschutz/index.html",
            chunks: ["commons", "datenschutz"],
        }),
        new HtmlWebpackPlugin({
            template: "src/impressum/impressum.html",
            filename: "impressum/index.html",
            chunks: ["commons", "impressum"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/dorotheenhofe/dorotheenhofe.html",
            filename: "projekte/dorotheenhofe/index.html",
            chunks: ["commons", "dorotheenhofe"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/hardenberg/hardenberg.html",
            filename: "projekte/hardenberg/index.html",
            chunks: ["commons", "hardenberg"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/knesebeckstrabe/knesebeckstrabe.html",
            filename: "projekte/knesebeckstrabe/index.html",
            chunks: ["commons", "knesebeckstrabe"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/city/city.html",
            filename: "projekte/city/index.html",
            chunks: ["commons", "city"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/tower/tower.html",
            filename: "projekte/tower/index.html",
            chunks: ["commons", "tower"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/kaiser/kaiser.html",
            filename: "projekte/kaiser/index.html",
            chunks: ["commons", "kaiser"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/bellevue/bellevue.html",
            filename: "projekte/bellevue/index.html",
            chunks: ["commons", "bellevue"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/lehrter/lehrter.html",
            filename: "projekte/lehrter/index.html",
            chunks: ["commons", "lehrter"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/shopping/shopping.html",
            filename: "projekte/shopping/index.html",
            chunks: ["commons", "shopping"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/historisches/historisches.html",
            filename: "projekte/historisches/index.html",
            chunks: ["commons", "historisches"],
        }),
        new HtmlWebpackPlugin({
            template: "src/projekte/sophienstrabe/sophienstrabe.html",
            filename: "projekte/sophienstrabe/index.html",
            chunks: ["commons", "sophienstrabe"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/index.html",
            filename: "en/index.html",
            chunks: ["commons", "index_en"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/claim/claim.html",
            filename: "en/claim/index.html",
            chunks: ["commons", "claim"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/projectdev/projectdev.html",
            filename: "en/projectdev/index.html",
            chunks: ["commons", "projectdev"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/contacts/contacts.html",
            filename: "en/contacts/index.html",
            chunks: ["commons", "contacts"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/privacy/privacy.html",
            filename: "en/privacy/index.html",
            chunks: ["commons", "privacy"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/imprint/imprint.html",
            filename: "en/imprint/index.html",
            chunks: ["commons", "imprint"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/projects/dorotheenhofe/dorotheenhofe.html",
            filename: "en/projects/dorotheenhofe/index.html",
            chunks: ["commons", "dorotheenhofe_en"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/projects/hardenberg/hardenberg.html",
            filename: "en/projects/hardenberg/index.html",
            chunks: ["commons", "hardenberg_en"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/projects/knesebeckstrabe/knesebeckstrabe.html",
            filename: "en/projects/knesebeckstrabe/index.html",
            chunks: ["commons", "knesebeckstrabe_en"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/projects/city/city.html",
            filename: "en/projects/city/index.html",
            chunks: ["commons", "city_en"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/projects/tower/tower.html",
            filename: "en/projects/tower/index.html",
            chunks: ["commons", "tower_en"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/projects/kaiser/kaiser.html",
            filename: "en/projects/kaiser/index.html",
            chunks: ["commons", "kaiser_en"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/projects/bellevue/bellevue.html",
            filename: "en/projects/bellevue/index.html",
            chunks: ["commons", "bellevue_en"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/projects/lehrter/lehrter.html",
            filename: "en/projects/lehrter/index.html",
            chunks: ["commons", "lehrter_en"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/projects/shopping/shopping.html",
            filename: "en/projects/shopping/index.html",
            chunks: ["commons", "shopping_en"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/projects/historic/historic.html",
            filename: "en/projects/historic/index.html",
            chunks: ["commons", "historic"],
        }),
        new HtmlWebpackPlugin({
            template: "src/en/projects/sophienstrabe/sophienstrabe.html",
            filename: "en/projects/sophienstrabe/index.html",
            chunks: ["commons", "sophienstrabe_en"],
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
                    preset: ["default", { discardComments: { removeAll: true } }],
                },
                canPrint: true,
            }),
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
};
