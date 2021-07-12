const githubService = require('../../../src/services/githubRest.service');
const memberController = require('../../../src/controllers/member.controller');

jest.mock('../../../src/services/githubRest.service', () => ({
  getMembers: jest.fn().mockResolvedValue([]),
}));

describe('MemberController', () => {
  let mockReq;
  let mockRes;
  let mockSend;

  beforeEach(() => {
    mockSend = jest.fn();
    mockReq = {
      params: {
        organizationName: 'xendit',
      },
    };
    mockRes = {
      status: () => ({ send: mockSend }),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  describe('getMembers', () => {
    test('should call githubService.create with correct param', async () => {
      await memberController.getMembers(mockReq, mockRes);

      expect(githubService.getMembers).toHaveBeenCalledWith('xendit');
    });
  });
});
