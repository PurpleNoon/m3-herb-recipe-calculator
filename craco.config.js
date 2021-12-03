const config = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.module.rules.unshift({
        test: /\.worker\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'worker-loader',
      })
      return webpackConfig;
    }
  }
}

module.exports = config;
