const assert = require('assert');
const request = require('request');
const fs = require('fs');

const host = 'http://localhost:3000';

function statusCase(url, status) {
	request(`${host}${url}`, (err, resp) => {
		assert.ifError(err);
		assert.equal(status, resp.statusCode);
		console.info(`status case with ${url} -> OK`);
	});
}

function uploadCase(url, filepath, status) {
	const formdata = {
	  custom_file: {
	      value:  fs.createReadStream(__dirname + filepath),
	      options: {
	        filename: 'topsecret.jpg',
	        contentType: 'image/jpg'
	      }
		}
	}
	request.post({ url: `${host}${url}`, formdata }, (err, resp) => {
		assert.ifError(err);
		assert.equal(status, resp.statusCode);
		console.info('upload case -> OK');
	});
}
/* run tests */

statusCase('/', 200);
statusCase('/random', 404);

uploadCase('/upload', '/1.png', 200);