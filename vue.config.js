/* eslint-disable prettier/prettier */
const path = require("path");

module.exports = {
  chainWebpack: config => {
    config.module
      .rule("doc")
      .test(/\.vue$/)
      .include
        .add(path.resolve(__dirname, "src/views"))
        .end()
      .use("doc-loader")
        .loader(path.resolve(__dirname, "scripts/doc-loader.js"))
        .end();
  }
};
