'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var doProject = function doProject() {

  this.createProject = function (app) {

    return (0, _mkdirp2['default'])('./' + app + '', function (err) {
      if (err) console.log(err);else console.log('flowJS create:' + app);
    });
  };

  /*  
     let modules = [ 
          {block:'controllers'},
          {block:'models'},
          {block:'routes'}
      ];  
          
      let blocks = modules.reduce(function(modules){
          return mkdirp('./'+app+'/'+blocks,(err => {
           if(err) console.log(err)
           else console.log('flowJS create:'+blocks);
         }));
      });
  */

  this.createModules = function (app) {

    var index = undefined;
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    for (index = 0; index < 4; index++) {
      //     let blocks += fruits[index];

      return (0, _mkdirp2['default'])('./' + app + '/' + fruits[index], function (err) {
        if (err) console.log(err);else console.log('flowJS create:' + fruits[index]);
      });
    }
  };
};

module.exports = doProject;
//# sourceMappingURL=construction.js.map