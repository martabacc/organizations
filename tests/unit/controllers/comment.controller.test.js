const commentService = require('../../../src/services/comment.service');
const commentController = require('../../../src/controllers/comment.controller');

jest.mock('../../../src/services/comment.service', () => ({
  create: jest.fn(),
  softDelete: jest.fn(),
  getAll: jest.fn(),
}));

describe('CommentController', () => {
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

  describe('create', () => {
    test('should call commentService.create with correct param', async () => {
      mockReq.body = {};

      await commentController.create(mockReq, mockRes);

      expect(commentService.create).toHaveBeenCalledWith({
        organizationName: 'xendit',
      });
    });
  });

  describe('get', () => {
    test('should call commentService.create with correct param', async () => {
      mockReq.body = {};

      await commentController.get(mockReq, mockRes);

      const expectedArgs = ['xendit', { comment: 1, _id: 0 }];

      expect(commentService.getAll).toHaveBeenCalledWith(...expectedArgs);
    });
  });

  describe('softDelete', () => {
    test('should call commentService.create with correct param', async () => {
      await commentController.softDelete(mockReq, mockRes);

      const expectedArgs = ['xendit'];

      expect(commentService.softDelete).toHaveBeenCalledWith(...expectedArgs);
    });
  });
});
