const Requests = require('../../models/request.model');

const addRequest = async (obj, args, ctx) => {
  const { parrot, code, reason } = args.input;

  const request = new Requests({
    parrot,
    code,
    reason
  });

  return {
    request: request.save()
  };
};

module.exports = addRequest;
