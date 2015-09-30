'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _readline = require('readline');

var _readline2 = _interopRequireDefault(_readline);

var _construction = require('./construction');

var _construction2 = _interopRequireDefault(_construction);

var rl = _readline2['default'].createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("name project:", function (app) {

  var doProject = new _construction2['default']();

  doProject.createProject(app);
  doProject.createModules(app);

  rl.close();
});
//# sourceMappingURL=app.js.map
