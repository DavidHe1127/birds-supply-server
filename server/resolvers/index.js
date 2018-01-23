const { connectionFromArray } = require('graphql-relay');
const glob = require('glob');

const loadResolvers = type =>
  glob
    .sync(`${__dirname}/${type}/*.js`, {
      nosort: true
    })
    .reduce((prev, next) => {
      const resolver = require(next);
      prev[resolver.name] = resolver;
      return prev;
    }, {});

// const idResolver = {
//   Query: {
//     id: () => 'dGhpcyBpcyBkYXZpZCBtciBoZSdzIHRlc3Q='
//   }
// };

const resolvers = {
  Query: loadResolvers('queries'),
  Mutation: loadResolvers('mutations'),
  Supplier: {
    parrotsConnection: (obj, args) =>
      connectionFromArray(obj.parrots || [], args)
  }
};

export default resolvers;
