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

                  (0, _mkdirp2['default'])(app + '/app', function () {
                        console.log('   \x1b[35mcreate\x1b[0m : ' + '/app');
                  });
                  (0, _mkdirp2['default'])(app + '/config', function () {
                        console.log('   \x1b[35mcreate\x1b[0m : ' + '/config');
                  });
                  (0, _mkdirp2['default'])(app + '/public', function () {
                        console.log('   \x1b[35mcreate\x1b[0m : ' + '/public');
                  });
                  (0, _mkdirp2['default'])(app + '/test', function () {
                        console.log('   \x1b[35mcreate\x1b[0m : ' + '/test');
                  });
            }

            return create(app);
            complete();
      };
};

module.exports = doProject;
//# sourceMappingURL=construction.js.map
