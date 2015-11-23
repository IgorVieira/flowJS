import mkdirp from 'mkdirp';
import readline from 'readline';
import Construction from './construction';
import fs from 'fs';



let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('\x1b[36mName project\x1b[0m : ', (app => {

let doProject = new Construction();


   fs.exists(app, (err => {
   		if (!err){
   			doProject.createProject(app);
			  doProject.createModules(app);
   		}else{
   			console.log('Folder exists')
   		}

   }));



  rl.close();
}));
