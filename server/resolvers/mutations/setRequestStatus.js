const Requests = require('../../models/request.model');

const setRequestStatus = async (obj, args) => {
  const { id, status } = args.input;
  const params = {};

  if (status) {
    params.status = status;
  }

  // set new to true to return modified document
  const request = await Requests.findByIdAndUpdate(id, params, {
    new: true
  });

  return {
    request
  };
};

module.exports = setRequestStatus;
