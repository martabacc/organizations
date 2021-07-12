const { Octokit } = require('@octokit/rest');
const GithubService = require('../../../src/services/githubRest.service');
const fixtures = require('../../fixtures');

jest.mock('@octokit/rest');

describe('GithubService', () => {
  const organizationName = 'xendit';

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('getMembers', () => {
    test('should call Comment.create with correct param', () => {
      const instances = Octokit.mock.instances[0];
      instances.rest = { orgs: { listMembers: jest.fn().mockResolvedValue(fixtures.github.getMembers) } };

      GithubService.getMembers(organizationName);

      expect(instances.rest.orgs.listMembers).toHaveBeenCalledWith({
        org: organizationName,
      });
    });
  });
});
