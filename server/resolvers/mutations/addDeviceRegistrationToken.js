const addDeviceRegistrationToken = async (obj, args, ctx) => {
  const { value } = args.input;


  return {
    request: request.save()
  };
};

module.exports = addDeviceRegistrationToken;
