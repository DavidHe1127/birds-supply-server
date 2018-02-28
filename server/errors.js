const { createError } = require('apollo-errors');

export const UnauthorizedError = createError('AuthorizationError', {
  message: 'You are not authorized to do this'
});

export const UnauthenticatedError = createError('AuthorizationError', {
  message: 'You are not authenticated'
});
