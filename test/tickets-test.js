const request = require('supertest');
const app = request.agent("http://localhost:3000");
const should = require('should');

describe('when user loads home page', function() {
	it('should render first page of tickets with previous and next buttons and list of tickets', function(done) {
		app
		.get("/")
		.expect('Content-Type', /html/)
		.expect(200)
		.end(function(err, res){
			(res.text.includes('Ticket Id')).should.be.equal(true);
			(res.text.includes('nextButton')).should.be.equal(true);
			(res.text.includes('prevButton')).should.be.equal(true);
			done();
		});
	});
});

describe('when user clicks on next button', function() {
	const apiUrl = '/?nextpage=eyJvIjoibmljZV9pZCIsInYiOiJhUmtBQUFBQUFBQUEifQ%3D%3D'
	it('should render next page of tickets with previous and next buttons and list of tickets', function(done) {
		app
		.get(apiUrl)
		.expect('Content-Type', /html/)
		.expect(200)
		.end(function(err, res){
			(res.text.includes('Ticket Id')).should.be.equal(true);
			(res.text.includes('nextButton')).should.be.equal(true);
			(res.text.includes('prevButton')).should.be.equal(true);
			done();
		});
	});
});

describe('when user clicks on previous button', function() {
	const apiUrl = '/?previouspage=eyJvIjoibmljZV9pZCIsInYiOiJhUmtBQUFBQUFBQUEifQ%3D%3D'
	it('should render previous page of tickets with previous and next buttons and list of tickets', function(done) {
		app
		.get(apiUrl)
		.expect('Content-Type', /html/)
		.expect(200)
		.end(function(err, res){
			(res.text.includes('Ticket Id')).should.be.equal(true);
			(res.text.includes('nextButton')).should.be.equal(true);
			(res.text.includes('prevButton')).should.be.equal(true);
			done();
		});
	});
});

describe('when user clicks on previous button from first page', function() {
	const apiUrl = '/?previouspage=eyJvIjoibmljZV9pZCIsInYiOiJhUUVBQUFBQUFBQUEifQ%3D%3D'
	it('should render page with previous and next buttons and No tickets error message', function(done) {
		app
		.get(apiUrl)
		.expect('Content-Type', /html/)
		.expect(200)
		.end(function(err, res){
			(res.text.includes('No tickets')).should.be.equal(true);
			(res.text.includes('nextButton')).should.be.equal(true);
			(res.text.includes('prevButton')).should.be.equal(true);
			done();
		});
	});
});

describe('when user hits an incorrect URL', function() {
	const apiUrl = '/wrong-url'
	it('should render error page', function(done) {
		app
		.get(apiUrl)
		.expect('Content-Type', /html/)
		.expect(404)
		.end(function(err, res){
			(res.text.includes('Cannot GET')).should.be.equal(true);
			done();
		});
	});
});

describe('when user accesses an invalid url', function() {
	const apiUrl = '/?previouspage=eyJvIjoibmljZV9pZCIsInYiOiJh'
	it('should render page with error message', function(done) {
		app
		.get(apiUrl)
		.expect('Content-Type', /html/)
		.expect(200)
		.end(function(err, res){
			(res.text.includes('API URL is invalid or unavailable. Try again later!')).should.be.equal(true);
			done();
		});
	});
});








