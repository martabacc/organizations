const httpStatus = require('http-status');
const commentService = require('../services/comment.service');

const create = async (req, res) => {
  const { organizationName } = req.params;

  const comment = await commentService.create({
    ...req.body,
    organizationName,
  });

  res.status(httpStatus.CREATED).send(comment);
};

const get = async (req, res) => {
  const { organizationName } = req.params;

  const allowedFields = { comment: 1, _id: 0 };
  const comments = await commentService.getAll(organizationName, allowedFields);

  res.status(httpStatus.OK).send(comments);
};

const softDelete = async (req, res) => {
  const { organizationName } = req.params;

  await commentService.softDelete(organizationName);

  res.status(httpStatus.OK).send();
};

module.exports = {
  create,
  get,
  softDelete,
};
