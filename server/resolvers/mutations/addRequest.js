const Requests = require('../../models/request.model');

const addRequest = async (obj, args, ctx) => {
  const { bird, code, reason } = args.input;

  const request = new Requests({
    bird,
    code,
    reason
  });

  return {
    request: request.save()
  };
};

module.exports = addRequest;

// mutation {
//   addRequest(input: {
//     bird: "caique",
//     code: "caique",
//     reason: "I love this bird"
//   }) {
//     request {
//       id
//     }
//   }
// }
