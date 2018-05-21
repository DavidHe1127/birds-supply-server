const env = {
  isAuthFree: process.env.NODE_ENV !== 'production' && process.env.AUTH_FREE === '1'
};

export {
  env
};
