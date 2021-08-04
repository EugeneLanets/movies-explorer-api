const rateLimit = require('express-rate-limit');
const { LIMITER_OPTIONS } = require('../config');

const limiter = rateLimit(LIMITER_OPTIONS);

module.exports = limiter;
