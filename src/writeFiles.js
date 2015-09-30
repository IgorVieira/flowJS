import bluebird from 'bluebird';
import fs from 'fs';
bluebird.promisifyAll(fs);
let StringDecoder = require('string_decoder').StringDecoder;
let decoder = new StringDecoder('utf8');


	
	var Promise = fs.readFileAsync(name);

	Promise
        .then(function(data) {
	    console.log(decoder.write(data));  
	})
	.catch(SyntaxError, function(e) {
	    console.error("invalid json in file");
	})
	.catch(function(e) {
	    console.error("unable to read file");
	})

