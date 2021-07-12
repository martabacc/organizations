const { Octokit } = require('@octokit/rest');
const config = require('../config/config');

const octokit = new Octokit({
  auth: config.github.apiKey,
});

/**
 * get user detail from given username
 * @param {string} username
 * @returns {object} detail user
 */
const getUserDetail = async (username) => {
  const { data: user } = await octokit.rest.users.getByUsername({
    username,
  });

  return user;
};

/**
 * get enriched members detail from given org name
 * @param {string} organizationName
 * @returns {object} array of members
 */
const getMembers = async (organizationName) => {
  const { data: members } = await octokit.rest.orgs.listMembers({
    org: organizationName,
  });

  const getFollowers = members.map(async (member, index) => {
    const { followers } = await getUserDetail(member.login);

    Object.assign(members[index], { followers });
  });

  await Promise.all(getFollowers);

  return members;
};

module.exports = {
  getMembers,
  getUserDetail,
};
