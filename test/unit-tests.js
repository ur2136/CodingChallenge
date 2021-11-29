const request = require('supertest');
process.env.NODE_ENV = 'test'

describe('loading express server', function () {
 var server;
 beforeEach(function () {
    app = require('../app');
 });
 afterEach(function () {
 });
 it('responds to / call', function slashCall(done) {
 request(app)
 .get('/')
 .expect(200, done);
 });
 it('when 404 error happens', function otherCall(done) {
 request(app)
 .get('/xyz')
 .expect(404, done);
  });
});

describe('ticket routes', function () {
  var server;
  beforeEach(function () {
    server = require('../app');
  });
  afterEach(function () {
  });
  it('tickets list', function testAllTickets(done) {
  request(server)
    .get('/tickets')
    .expect(200, done);
  });
});

