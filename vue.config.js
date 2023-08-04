const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "./",
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
      },
    },
  },
  chainWebpack(config) {
    config.plugin("html").tap((args) => {
      //标题
      args[0].title = "template";
      return args;
    });
    config.optimization.splitChunks({
      cacheGroups: {
        common: {
          name: "chunk-common",
          chunks: "initial",
          minChunks: 1,
          maxInitialRequests: 5,
          minSize: 0,
          priority: 1,
          reuseExistingChunk: true,
        },
        vendors: {
          name: "chunk-vendors",
          test: /[\\/]node_modules[\\/]/,
          chunks: "initial",
          maxSize: 600000,
          maxInitialRequests: 20,
          priority: 2,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    });
  },
});
