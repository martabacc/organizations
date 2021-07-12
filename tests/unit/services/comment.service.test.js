const { Comment } = require('../../../src/models');
const CommentService = require('../../../src/services/comment.service');

jest.mock('../../../src/models', () => ({
  Comment: {
    create: jest.fn(),
    find: jest.fn(),
  },
}));

describe('CommentService', () => {
  const organizationName = 'xendit';

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('create', () => {
    test('should return success when all fields are valid', () => {
      const payload = {};

      CommentService.create(payload);

      expect(Comment.create).toHaveBeenCalledWith(payload);
    });
  });

  describe('findAll', () => {
    test('should return succes', () => {
      const opts = {};
      CommentService.getAll(organizationName, {});

      expect(Comment.find).toHaveBeenCalledWith({ organizationName }, opts);
    });
  });
});
