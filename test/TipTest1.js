const assert = require('assert');
const app = require('../Tip1');
const request = require('supertest');

describe('API POST Request', () => {
  it('should send data and receive confirmation message', (done) => {
    request(app)
      .post('/api/data')
      .send({ someData: 'example' }) // Envoyez des données avec la requête POST
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        assert.strictEqual(res.body.message, 'Données reçues avec succès !');
        done();
      });
  });
});
