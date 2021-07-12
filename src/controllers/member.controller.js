const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { transformMemberResponse: transform } = require('../transformations');
const { githubService } = require('../services');

const getMembers = catchAsync(async (req, res) => {
  const { organizationName: org } = req.params;

  const result = await githubService.getMembers(org).then(transform);

  res.status(httpStatus.OK).send(result);
});

module.exports = {
  getMembers,
};
