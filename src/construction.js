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

        mkdirp(app+'/app',() => {
             console.log('   \x1b[35mcreate\x1b[0m : ' + '/app'); 
        })
        mkdirp(app+'/config',() => {
              console.log('   \x1b[35mcreate\x1b[0m : ' + '/config');    
        })
        mkdirp(app+'/public',() => {
              console.log('   \x1b[35mcreate\x1b[0m : ' + '/public');    
        })
        mkdirp(app+'/test',() => {
              console.log('   \x1b[35mcreate\x1b[0m : ' + '/test'); 
        })

    }

    return create(app)
    complete();    
    
  });



  
}

module.exports = doProject;