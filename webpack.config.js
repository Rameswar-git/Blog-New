const path = require('path');
const ROOT = path.resolve( __dirname, 'src' );

/**
 * Webpack Plugins
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const ngTemplateLoader = (
    'ngtemplate?relativeTo=' + path.resolve(__dirname, './src/') +
    '!html'
);

module.exports = {
    context: ROOT,

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'tslint-loader',
                    options: {
                        emitErrors: true
                    }
                },
                enforce: 'pre'
            },

            {
                test: /\.ts$/,
                exclude: [ /node_modules/ ],
                use: [
                    'ng-annotate-loader',
                    'ts-loader'
                ]
            },

            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                    publicPath: '../'
                }),
            },

            {
                test: /\.(jpg|png|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        esModule: false,
                    },
                }],
            },

            {
                test: /\.(svg|woff|woff2|eot|ttf)$/,
                use: 'file-loader?outputPath=fonts/'
            },

            {
                test: /.html$/,
                exclude: /index.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                      interpolate: true
                    }
                  }
            },

            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Blog_latest',
            template: 'index.html',
            inject: true,

        }),
        new LoaderOptionsPlugin({
            debug: true,
            options: {
                tslint: {
                    configuration: require('./tslint.json'),
                    typeCheck: true
                }
            }
        }),
        new ExtractTextPlugin('css/style.css')
    ],

    entry: './index.ts'
};
