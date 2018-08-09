process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const knex = require('../../src/server/utils/knexfile');
const server = require('../../src/server/app');

describe('routes : users', () => {
  describe('GET /v1/lookup/alcohol', () => {
    it('should respond with all the lookup values for alcohol', (done) => {
      chai.request(server)
      .get('/v1/lookup/alcohol')
      .end((err, res) => {
        // there should be no errors
        should.not.exist(err);
        // there should be a 200 status code
        res.status.should.equal(200);
        // the response should be JSON
        res.type.should.equal('application/json');
        // the JSON response body should have a
        // key-value pair of {[4 objects]}
        res.body.length.should.eql(4);
        // the first object in the data array should
        // have the right keys
        res.body[0].should.include.keys( 'id', 'description');
        done();
      });
    });
  });

  describe('GET /v1/lookup/bodytype', () => {
    it('should respond with all the lookup values for bodytype', (done) => {
      chai.request(server)
      .get('/v1/lookup/bodytype')
      .end((err, res) => {
        // there should be no errors
        should.not.exist(err);
        // there should be a 200 status code
        res.status.should.equal(200);
        // the response should be JSON
        res.type.should.equal('application/json');
        // the JSON response body should have a
        // key-value pair of {[5 objects]}
        res.body.length.should.eql(5);
        // the first object in the data array should
        // have the right keys
        res.body[0].should.include.keys( 'id', 'description');
        done();
      });
    });
  });

  describe('GET /v1/lookup/career', () => {
    it('should respond with all the lookup values for career', (done) => {
      chai.request(server)
      .get('/v1/lookup/career')
      .end((err, res) => {
        // there should be no errors
        should.not.exist(err);
        // there should be a 200 status code
        res.status.should.equal(200);
        // the response should be JSON
        res.type.should.equal('application/json');
        // the JSON response body should have a
        // key-value pair of {[69 objects]}
        res.body.length.should.eql(69);
        // the first object in the data array should
        // have the right keys
        res.body[0].should.include.keys( 'id', 'description');
        done();
      });
    });
  });

  describe('GET /v1/lookup/country', () => {
    it('should respond with all the lookup values for country', (done) => {
      chai.request(server)
      .get('/v1/lookup/country')
      .end((err, res) => {
        // there should be no errors
        should.not.exist(err);
        // there should be a 200 status code
        res.status.should.equal(200);
        // the response should be JSON
        res.type.should.equal('application/json');
        // the JSON response body should have a
        // key-value pair of {[250 objects]}
        res.body.length.should.eql(250);
        // the first object in the data array should
        // have the right keys
        res.body[0].should.include.keys('id', 'code_2', 'code_3', 'name');
        done();
      });
    });
  });
  describe('GET /v1/lookup/diet', () => {
    it('should respond with all the lookup values for diet', (done) => {
      chai.request(server)
      .get('/v1/lookup/diet')
      .end((err, res) => {
        // there should be no errors
        should.not.exist(err);
        // there should be a 200 status code
        res.status.should.equal(200);
        // the response should be JSON
        res.type.should.equal('application/json');
        // the JSON response body should have a
        // key-value pair of {[5 objects]}
        res.body.length.should.eql(5);
        // the first object in the data array should
        // have the right keys
        res.body[0].should.include.keys( 'id', 'description');
        done();
      });
    });
  });
  describe('GET /v1/lookup/drug', () => {
    it('should respond with all the lookup values for drug', (done) => {
      chai.request(server)
      .get('/v1/lookup/drug')
      .end((err, res) => {
        // there should be no errors
        should.not.exist(err);
        // there should be a 200 status code
        res.status.should.equal(200);
        // the response should be JSON
        res.type.should.equal('application/json');
        // the JSON response body should have a
        // key-value pair of {[5 objects]}
        res.body.length.should.eql(5);
        // the first object in the data array should
        // have the right keys
        res.body[0].should.include.keys( 'id', 'description');
        done();
      });
    });
  });
  describe('GET /v1/lookup/education', () => {
    it('should respond with all the lookup values for education', (done) => {
      chai.request(server)
      .get('/v1/lookup/education')
      .end((err, res) => {
        // there should be no errors
        should.not.exist(err);
        // there should be a 200 status code
        res.status.should.equal(200);
        // the response should be JSON
        res.type.should.equal('application/json');
        // the JSON response body should have a
        // key-value pair of {[5 objects]}
        res.body.length.should.eql(5);
        // the first object in the data array should
        // have the right keys
        res.body[0].should.include.keys( 'id', 'description');
        done();
      });
    });
  });
  describe('GET /v1/lookup/exercise', () => {
    it('should respond with all the lookup values for exercise', (done) => {
      chai.request(server)
      .get('/v1/lookup/exercise')
      .end((err, res) => {
        // there should be no errors
        should.not.exist(err);
        // there should be a 200 status code
        res.status.should.equal(200);
        // the response should be JSON
        res.type.should.equal('application/json');
        // the JSON response body should have a
        // key-value pair of {[4 objects]}
        res.body.length.should.eql(4);
        // the first object in the data array should
        // have the right keys
        res.body[0].should.include.keys( 'id', 'description');
        done();
      });
    });
  });
  describe('GET /v1/lookup/language', () => {
    it('should respond with all the lookup values for language', (done) => {
      chai.request(server)
      .get('/v1/lookup/language')
      .end((err, res) => {
        // there should be no errors
        should.not.exist(err);
        // there should be a 200 status code
        res.status.should.equal(200);
        // the response should be JSON
        res.type.should.equal('application/json');
        // the JSON response body should have a
        // key-value pair of {[10 objects]}
        res.body.length.should.eql(10);
        // the first object in the data array should
        // have the right keys
        res.body[0].should.include.keys( 'id', 'description');
        done();
      });
    });
  });
  describe('GET /v1/lookup/personality', () => {
    it('should respond with all the lookup values for personality', (done) => {
      chai.request(server)
      .get('/v1/lookup/personality')
      .end((err, res) => {
        // there should be no errors
        should.not.exist(err);
        // there should be a 200 status code
        res.status.should.equal(200);
        // the response should be JSON
        res.type.should.equal('application/json');
        // the JSON response body should have a
        // key-value pair of {[12 objects]}
        res.body.length.should.eql(12);
        // the first object in the data array should
        // have the right keys
        res.body[0].should.include.keys( 'id', 'description');
        done();
      });
    });
  });
  describe('GET /v1/lookup/smoke', () => {
    it('should respond with all the lookup values for smoke', (done) => {
      chai.request(server)
      .get('/v1/lookup/smoke')
      .end((err, res) => {
        // there should be no errors
        should.not.exist(err);
        // there should be a 200 status code
        res.status.should.equal(200);
        // the response should be JSON
        res.type.should.equal('application/json');
        // the JSON response body should have a
        // key-value pair of {[5 objects]}
        res.body.length.should.eql(5);
        // the first object in the data array should
        // have the right keys
        res.body[0].should.include.keys( 'id', 'description');
        done();
      });
    });
  });
  describe('GET /v1/lookup/state', () => {
    it('should respond with all the lookup values for state', (done) => {
      chai.request(server)
      .get('/v1/lookup/state')
      .end((err, res) => {
        // there should be no errors
        should.not.exist(err);
        // there should be a 200 status code
        res.status.should.equal(200);
        // the response should be JSON
        res.type.should.equal('application/json');
        // the JSON response body should have a
        // key-value pair of {[4417 objects]}
        res.body.length.should.eql(4417);
        // the first object in the data array should
        // have the right keys
        res.body[0].should.include.keys('id', 'country_id', 'name');
        done();
      });
    });
  });
});
