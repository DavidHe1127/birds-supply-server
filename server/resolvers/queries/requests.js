const Requests = require('../../models/request.model');

const { connectionFromArray } = require('graphql-relay');

const requests = async (obj, args, ctx) => {
  const query = {};

  const requestList = await Requests.find(query)
    .then(res => connectionFromArray(res, args));

  const propsToMerge = {
    count: requestList.edges.length || 0
  };

  return Object.assign(requestList, propsToMerge);
};

module.exports = requests;
