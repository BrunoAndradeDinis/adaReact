module.exports = function override(config){
  const fallback = config.resolve.fallback || {};

  Object.assign(fallback,{
    "vm": require.resolve("vm-browserify"),
    // fs: false,
    // "vm": false,
  });
  config.resolve.fallback = fallback;
  return config
}