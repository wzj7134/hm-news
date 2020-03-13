module.exports = {
    devServer: {
        open: true
    },
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 36
                    })
                ]
            }
        }
    }
}