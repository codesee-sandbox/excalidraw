module.exports = function override(config, env) {
  // add CodeSee babel plugin
  if (env === "development") {
    const babelLoaderConfig = config.module.rules[1].oneOf[2];
    babelLoaderConfig.options.plugins.push("@codesee/instrument");
  }

  return config;
};
