import mkdirp from 'mkdirp';

let doProject = function() {

  this.createProject = (app =>{   
   return mkdirp(app,(err => {
       if(err) console.log(err)
       else console.log('flowJS create:'+app);          
    }));
  });



  this.createModules = (app => {
 
  })

}

module.exports = doProject;