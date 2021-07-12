const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const commentSchema = mongoose.Schema(
  {
    comment: {
      type: String,
      required: true,
      trim: true,
    },
    organizationName: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
commentSchema.plugin(toJSON);


/**
 * @typedef User
 */
const User = mongoose.model('Comment', commentSchema);

module.exports = User;
