const assert = require('assert');
const app = require('../Tip');
const request = require('supertest');

describe('API GET Request', () => {
  it('should return a specific number', (done) => {
    request(app)
      .get('/api/number')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        assert.strictEqual(res.body.number, 42);
        done();
      });
  });
});
