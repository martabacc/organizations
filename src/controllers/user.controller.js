const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');

const helloWorld = catchAsync(async (_, res) => {
  res.status(httpStatus.OK).send('HELLO WORLD');
});

module.exports = {
  helloWorld,
};
