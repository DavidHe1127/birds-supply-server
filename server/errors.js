const { createError } = require('apollo-errors');

export const AuthorizationError = createError('AuthorizationError', {
  message: 'You are not authorized.'
});
