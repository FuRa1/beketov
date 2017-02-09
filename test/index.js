const assert = require('assert');
const request = require('request');

const host = 'http://localhost:3000';

function testStatus(url, status) {
	request(`${host}${url}`, (err, resp) => {
		assert.ifError(err);
		assert.equal(status, resp.statusCode);
	});
}

/* run tests */

testStatus('/', 200);
testStatus('/random', 404);