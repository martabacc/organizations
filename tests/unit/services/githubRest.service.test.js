const { Octokit } = require('@octokit/rest');
const GithubService = require('../../../src/services/githubRest.service');
const fixtures = require('../../fixtures');

jest.mock('@octokit/rest');

describe('GithubService', () => {
  const organizationName = 'xendit';

  afterAll(() => {
    // since all this file has one octokit instance shared across the file
    jest.resetAllMocks();
    jest.clearAllMocks();
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

  describe('getUserDetail', () => {
    test('should call getByUsername with correct param', async () => {
      const instances = Octokit.mock.instances[0];
      instances.rest = { users: { getByUsername: jest.fn().mockResolvedValue(fixtures.github.getMembers) } };

      await GithubService.getUserDetail('sampleUsername');

      expect(instances.rest.users.getByUsername).toHaveBeenCalledWith({
        username: 'sampleUsername',
      });
    });
  });
});
