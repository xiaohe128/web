// vue.config.js 配置说明
//官方vue.config.js 参考文档 https://cli.vuejs.org/zh/config/#css-loaderoptions
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  /**
   * 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
   *  map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
   *  有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
   * */
  productionSourceMap: false,
 
  // 它支持webPack-dev-server的所有选项
  devServer: {
    host: "localhost",
    port: 8081, // 端口号
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    proxy: 'https://www.easy-mock.com/mock/5cc6b60536f50f6f3bf78286/example' // 配置跨域处理
  }
}