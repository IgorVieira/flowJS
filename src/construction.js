import mkdirp from 'mkdirp';

let doProject = function() {

  this.createProject = function(app){
   
   return mkdirp('./'+app+'',(err => {
       if(err) console.log(err)
       else console.log('flowJS create:'+app);          
    }));
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



  this.createModules = function(app){
   
    let index;
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    for	(index = 0; index < 4; index++) {
//     let blocks += fruits[index];

	
         return mkdirp('./'+app+'/'+fruits[index],(err => {
          if(err) console.log(err)
          else console.log('flowJS create:'+fruits[index]);
         }));

    
       	
     } 
 }

}

module.exports = doProject;
