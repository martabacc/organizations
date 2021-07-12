const { Comment } = require('../models');

/**
 * create comment to model
 * @param {string} comment
 * @returns {Promise<Comment>}
 */
const create = async (comment) => {
  return Comment.create(comment);
};

/**
 * get all comment from given comment
 * @param {string} organizationName
 * @param {Object} opts
 * @returns {Promise<Comment>}
 */
const getAll = async (organizationName, opts) => {
  return Comment.find({ organizationName }, opts);
};

/**
 * delete all comment related to given org name
 * @param {string} organizationName
 * @param {Object} opts
 * @returns {Promise<Comment>}
 */
const softDelete = (organizationName) => {
  return Comment.removeMany({ organizationName });
};

module.exports = {
  create,
  getAll,
  softDelete,
};
