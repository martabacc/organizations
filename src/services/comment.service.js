const { Comment } = require('../models');

/**
 * Create a user
 * @param {Object} comment
 * @returns {Promise<Comment>}
 */
const create = async (comment) => {
  return Comment.create(comment);
};

module.exports = {
  create,
};
