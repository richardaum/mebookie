const fs = require("fs");
const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  addUnsafeCache(config);

  return config;
};

function addUnsafeCache(config) {
  const realUnsafeCache = {};
  const unsafeCacheHandler = {
    get(cache, key) {
      const cachedValue = cache[key];

      if (cachedValue && !fs.existsSync(cachedValue.path)) {
        delete cache[key];
        return undefined;
      }

      return cachedValue;
    },
  };

  const theProxiedCache = new Proxy(realUnsafeCache, unsafeCacheHandler);

  config.resolve = {
    ...config.resolve,
    unsafeCache: theProxiedCache,
  };
}
