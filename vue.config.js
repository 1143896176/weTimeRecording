module.exports = {
    lintOnSave: true,
    css: {
        loaderOptions: {
            postcss: {
                'autoprefixer': {
                    browsers: ['Android >= 4.0', 'iOS >= 7']
                },
                    plugins: [
                        require('postcss-px2rem')({
                            remUnit: 37.5//结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
                            ,}),
                ]
            },
            stylus: {}
        }
    },
    devServer: {
        /*
        * 简单拦截
        *  proxy:"域名"  非静态资源路径全部转发到此（即：未知请求）
        * */
        //可以拦截多个请求以什么开头的请求
        proxy: {
            '/api': {
                target: 'http://localhost:4000',
                ws: true,
                changeOrigin: true,
                pathRewrite:{
                    '^/api':''   //将 /api 去掉
                }
            },
            /*'/123': {
                target: 'http://localhost:8080',
                ws: true,
                changeOrigin: true,
                pathRewrite:{
                    '^/123':''
                }
            }*/
        }
    }
}
