const defaults = require('lodash/defaults');
const isBoolean = require('lodash/isBoolean');
const isFunction = require('lodash/isFunction');
const merge = require('lodash/merge');
const PolicyError = require('./policy-error');
exports = module.exports = function (policy, action = null) {
    if (!isFunction(policy)) throw new Error('Please provide a valid policy!');

    return function (request, response, next) {
        const result = policy(request,action);

        if (!isBoolean(result)) throw new Error('Policy returned a non-valid result.');

        if (!result) {
            return next(
                new PolicyError()
            );
        }

        return next();
    }
};

exports.PolicyError = PolicyError;