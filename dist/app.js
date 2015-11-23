'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _readline = require('readline');

var _readline2 = _interopRequireDefault(_readline);

var _construction = require('./construction');

var _construction2 = _interopRequireDefault(_construction);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var rl = _readline2['default'].createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('\x1b[36mName project\x1b[0m : ', function (app) {

  var doProject = new _construction2['default']();

  _fs2['default'].exists(app, function (err) {
    if (!err) {
      doProject.createProject(app);
      doProject.createModules(app);
    } else {
      console.log('Folder exists');
    }
  });

  rl.close();
});