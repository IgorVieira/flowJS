import mkdirp from 'mkdirp';
import fs from 'fs';

let doProject = function() {

  this.createModules = (app => {

    mkdirp(app,(err => {
        if(err) console.log(err)        
     }));


    function create(app){


      var folders = [
          {name:'app'}
          ,{name:'app/views'}
          ,{name:'app/routes'}
          ,{name:'app/models'}
          ,{name:'app/controllers'}
          ,{name:'config'}
          ,{name:'public'}
        ]


      for (var i = 0; i < folders.length; i++) {
        mkdirp(app+'/'+folders[i].name,(err => {
          if (err) console.error(err)
        }))
       console.log('   \x1b[35mcreate\x1b[0m : ' + folders[i].name)
      }


    }

    return create(app)
    complete();

  });




}

module.exports = doProject;
