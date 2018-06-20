const Requests = require('../../models/request.model');

const rejectRequest = async (obj, args) => {
  const { id, reason } = args.input;
  const params = {
    status: 'rejected'
  };

  if (reason) {
    params.reason = reason;
  }

  // set new to true to return modified document
  const request = await Requests.findByIdAndUpdate(id, params, {
    new: true
  });

  return {
    request
  };
};

module.exports = rejectRequest;
