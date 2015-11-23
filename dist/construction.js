'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var doProject = function doProject() {

  this.createModules = function (app) {

    (0, _mkdirp2['default'])(app, function (err) {
      if (err) console.log(err);
    });

    function create(app) {

      var folders = [{ name: 'app' }, { name: 'app/views' }, { name: 'app/routes' }, { name: 'app/models' }, { name: 'app/controllers' }, { name: 'config' }, { name: 'public' }];

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