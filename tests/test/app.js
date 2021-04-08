import request from 'supertest';
import app from '../../src/app';
import { assert } from 'chai';

// Test General App
describe('App Routes', () => {
  describe('GET default / route', () => {
    it('it should respond with 200 with message welcome', (done) => {
      request(app)
        .get('/')
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.message, 'Welcome to shopia api');
          done();
        });
    });
  });
});