const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { commentService } = require('../services');

const create = catchAsync(async (req, res) => {
  const { organizationName } = req.params;

  const comment = await commentService.create({
    ...req.body,
    organizationName,
  });

  delete comment.id;

  res.status(httpStatus.CREATED).send(comment);
});

module.exports = {
  create,
};
