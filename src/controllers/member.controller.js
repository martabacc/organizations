const httpStatus = require('http-status');
const { transformMemberResponse: transform } = require('../transformations');
const githubService = require('../services/githubRest.service');

const getMembers = async (req, res) => {
  const { organizationName: org } = req.params;

  const result = await githubService.getMembers(org).then(transform);

  res.status(httpStatus.OK).send(result);
};

module.exports = {
  getMembers,
};
