const { Comment } = require('../../../src/models');
const CommentService = require('../../../src/services/comment.service');

jest.mock('../../../src/models', () => ({
  Comment: {
    create: jest.fn(),
    find: jest.fn(),
    removeMany: jest.fn(),
  },
}));

describe('CommentService', () => {
  const organizationName = 'xendit';

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('create', () => {
    test('should call Comment.create with correct param', () => {
      const payload = {};

      CommentService.create(payload);

      expect(Comment.create).toHaveBeenCalledWith(payload);
    });
  });

  describe('findAll', () => {
    test('should call Comment.find with correct param', () => {
      const opts = {};
      CommentService.getAll(organizationName, {});

      expect(Comment.find).toHaveBeenCalledWith({ organizationName }, opts);
    });
  });

  describe('softDelete', () => {
    test('should call model.removeAll correctly', () => {
      CommentService.softDelete(organizationName);

      expect(Comment.removeMany).toHaveBeenCalledWith({ organizationName });
    });
  });
});
