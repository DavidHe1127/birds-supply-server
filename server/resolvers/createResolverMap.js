const glob = require('glob');

module.exports = model => type =>
  glob
    .sync(`${__dirname}/${model}/${type}/*.js`, {
      nosort: true
    })
    .reduce((prev, next) => {
      const resolver = require(next);
      prev[resolver.name] = resolver;
      return prev;
    }, {});
