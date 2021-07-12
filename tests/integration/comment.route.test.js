const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../src/app');
const setupTestDB = require('../utils/setupTestDB');

setupTestDB();

describe('Comment Route', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('create', () => {
    test('should return 200 when all payload are correct', async () => {
      const payload = {
        comment: 'Lorem ipsum',
      };
      await request(app).post('/orgs/abc/comments').send(payload).expect(httpStatus.CREATED);
    });
  });

  describe('gete', () => {
    test('should return 200 when all payload are correct', async () => {
      await request(app).get('/orgs/abc/comments').expect(httpStatus.OK);
    });
  });
});
