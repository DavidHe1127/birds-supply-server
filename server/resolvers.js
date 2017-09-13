const channels = [{
  id: 1,
  name: 'soccer'
}, {
  id: 2,
  name: 'baseball'
}];

export const resolvers = {
  Query: {
    channels: (obj, args, context, info) => {
      console.log(args);
      return channels.filter(x => x.name === args.name);
    }
  }
};
