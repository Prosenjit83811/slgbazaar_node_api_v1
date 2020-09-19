'use strict';

const defaultOptions = {
    status: 401,
    statusText: 'Unauthorized',
    errorText: 'You do not have the correct permissions to access this resource.',
};

function PolicyError (error, options) {
  this.message = 'policy error';
  this.error = (error)? error : defaultOptions.errorText;
  this.status = (options && options.status)? options.status: defaultOptions.status;
  this.statusText = (options && options.statusText)? options.statusText : defaultOptions.statusText;
};

PolicyError.prototype = Object.create(Error.prototype);

PolicyError.prototype.toString = function () {
  return JSON.stringify(this.toJSON());
};

PolicyError.prototype.toJSON = function () {
  return {
    status: this.status,
    statusText: this.statusText,
    error: this.error
  };
};

module.exports = PolicyError;
