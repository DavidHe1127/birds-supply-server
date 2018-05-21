const Requests = require('../../models/request.model');

const addRequest = async (obj, args, ctx) => {
  console.log(request)

  const { bird, code, reason } = args.input;

  const request = new Requests({
    bird,
    code,
    reason
  });


  return request.save();
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
