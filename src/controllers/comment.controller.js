const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { transformMemberResponse: transform } = require('../transformations');
const { commentService, githubService } = require('../services');

const create = catchAsync(async (req, res) => {
  const { organizationName } = req.params;

  const comment = await commentService.create({
    ...req.body,
    organizationName,
  });

  res.status(httpStatus.CREATED).send(comment);
});

const get = catchAsync(async (req, res) => {
  const { organizationName } = req.params;

  const allowedFields = { comment: 1, _id: 0 };
  const comments = await commentService.getAll(organizationName, allowedFields);

  res.status(httpStatus.OK).send(comments);
});

const softDelete = catchAsync(async (req, res) => {
  const { organizationName } = req.params;

  await commentService.softDelete(organizationName);

  res.status(httpStatus.OK).send();
});

const getMembers = catchAsync(async (req, res) => {
  const { organizationName: org } = req.params;

  const result = await githubService.getMembers(org).then(transform);

  res.status(httpStatus.OK).send(result);
});

module.exports = {
  create,
  get,
  softDelete,
  getMembers,
};
