import mkdirp from 'mkdirp';
import fs from 'fs';

let doProject = function() {

  /*create a folder project*/


  this.createProject = (app =>{
   return mkdirp(app,(err => {
       if(err) console.log(err)
       else console.log('   \x1b[36mFlow start app\x1b[0m : '+app);
    }));
   complete();
  });

 /*create a subfolders for a project*/

  this.createModules = (app => {

    function create(app){


      var folders = [
          {name:'app'}
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
