module.exports = {
  chainWebpack: config => {
    config.module
      .rule("pug")
      .use("pug-plain-loader")
      .loader("pug-plain-loader");
  }
};
