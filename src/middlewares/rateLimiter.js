const rateLimit = require('express-rate-limit');

const maxRateInMinutes = (rate, minutes) => rateLimit({
  windowMs: minutes * 60 * 1000,
  max: rate,
  skipSuccessfulRequests: false,
});

module.exports = {
  maxRateInMinutes,
};
