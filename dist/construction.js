'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var doProject = function doProject() {

  /*create a folder project*/

  this.createProject = function (app) {
    return (0, _mkdirp2['default'])(app, function (err) {
      if (err) console.log(err);else console.log('   \x1b[36mFlow start app\x1b[0m : ' + app);
    });
    complete();
  };

  /*create a subfolders for a project*/

  this.createModules = function (app) {

    function create(app) {

      var folders = [{ name: 'app' }, { name: 'config' }, { name: 'public' }];

      for (var i = 0; i < folders.length; i++) {
        (0, _mkdirp2['default'])(app + '/' + folders[i].name, function (err) {
          if (err) console.error(err);
        });
        console.log('   \x1b[35mcreate\x1b[0m : ' + folders[i].name);
      }
    }

    return create(app);
    complete();
  };
};

module.exports = doProject;