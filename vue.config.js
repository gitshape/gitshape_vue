module.exports = {
    publicPath: '/',

    configureWebpack: {
        devtool: 'inline-source-map',
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        port: 9000,
        public: 'http://localhost:9000',
        disableHostCheck: true,
        hot: false,
        watchOptions: {
            poll: true
        },
        proxy: {
            '^/api': {
                target: 'http://localhost:5000',
                ws: true,
                changeOrigin: true,
                pathRewrite: { '^/api': '' },
            }
        }
    },
}