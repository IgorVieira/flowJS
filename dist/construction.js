'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var doProject = function doProject() {

  this.createProject = function (app) {
    return (0, _mkdirp2['default'])(app, function (err) {
      if (err) console.log(err);else console.log('flowJS create:' + app);
    });
  };

  this.createModules = function (app) {};
};

module.exports = doProject;
//# sourceMappingURL=construction.js.map
