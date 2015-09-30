'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

_bluebird2['default'].promisifyAll(_fs2['default']);
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');

var Promise = _fs2['default'].readFileAsync(name);

Promise.then(function (data) {
							console.log(decoder.write(data));
})['catch'](SyntaxError, function (e) {
							console.error("invalid json in file");
})['catch'](function (e) {
							console.error("unable to read file");
});
//# sourceMappingURL=writeFiles.js.map
