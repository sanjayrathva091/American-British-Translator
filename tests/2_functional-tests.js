const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
  // Test 1: Translation with text and locale fields
  test('POST request to /api/translate with valid text and locale', (done) => {
    chai
      .request(server)
      .post('/api/translate')
      .send({ text: 'Mangoes are my favorite fruit.', locale: 'american-to-british' })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, 'text');
        assert.property(res.body, 'translation');
        assert.equal(res.body.text, 'Mangoes are my favorite fruit.');
        assert.equal(
          res.body.translation,
          'Mangoes are my <span class="highlight">favourite</span> fruit.'
        );
        done();
      });
  });

  // Test 2: Translation with text and invalid locale field
  test('POST request to /api/translate with invalid locale', (done) => {
    chai
      .request(server)
      .post('/api/translate')
      .send({ text: 'Mangoes are my favorite fruit.', locale: 'invalid-locale' })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, 'error');
        assert.equal(res.body.error, 'Invalid value for locale field');
        done();
      });
  });

  // Test 3: Translation with missing text field
  test('POST request to /api/translate with missing text field', (done) => {
    chai
      .request(server)
      .post('/api/translate')
      .send({ locale: 'american-to-british' })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, 'error');
        assert.equal(res.body.error, 'Required field(s) missing');
        done();
      });
  });

  // Test 4: Translation with missing locale field
  test('POST request to /api/translate with missing locale field', (done) => {
    chai
      .request(server)
      .post('/api/translate')
      .send({ text: 'Mangoes are my favorite fruit.' })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, 'error');
        assert.equal(res.body.error, 'Required field(s) missing');
        done();
      });
  });

  // Test 5: Translation with empty text
  test('POST request to /api/translate with empty text', (done) => {
    chai
      .request(server)
      .post('/api/translate')
      .send({ text: '', locale: 'american-to-british' })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, 'error');
        assert.equal(res.body.error, 'No text to translate');
        done();
      });
  });

  // Test 6: Translation with text that needs no translation
  test('POST request to /api/translate with text that needs no translation', (done) => {
    chai
      .request(server)
      .post('/api/translate')
      .send({ text: 'This text needs no translation.', locale: 'american-to-british' })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, 'text');
        assert.property(res.body, 'translation');
        assert.equal(res.body.text, 'This text needs no translation.');
        assert.equal(res.body.translation, 'Everything looks good to me!');
        done();
      });
  });
});
