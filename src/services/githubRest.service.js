const { Octokit } = require('@octokit/rest');
const config = require('../config/config');

const octokit = new Octokit({
  auth: config.github.apiKey,
});

const getMembers = (organizationName) => {
  const members = octokit.rest.orgs.listMembers({
    org: organizationName,
  });

  return members.data;
};

module.exports = {
  getMembers,
};
