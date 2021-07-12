const { CommentService } = require('../../../src/models');

jest.mock('../../../src/models', () => ({
  CommentService: {
    create: jest.fn()
  }
}))

describe('CommentService', () => {

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should return 200 when all payload are correct', () => {
    const payload = {};

    CommentService.create(payload);

    expect(CommentService.create).toHaveBeenCalledWith(payload);
  });
});
