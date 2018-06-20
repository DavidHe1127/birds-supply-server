const Requests = require('../../models/request.model');

const approveRequest = async (obj, args) => {
  const { id } = args.input;
  const params = {
    status: 'approved'
  };

  // set new to true to return modified document
  const request = await Requests.findByIdAndUpdate(id, params, {
    new: true
  });

  return {
    request
  };
};

module.exports = approveRequest;
