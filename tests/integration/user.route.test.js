const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../src/app');
const setupTestDB = require('../utils/setupTestDB');

setupTestDB();

describe('Root Route', () => {
  describe('GET /', () => {
    test('should return 200', async () => {
      await request(app).get('/user').send().expect(httpStatus.OK);
    });
  });
});
