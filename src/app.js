import mkdirp from 'mkdirp';
import readline from 'readline';
import Construction from './construction';
import Writer from './writer';
import fs from 'fs';



let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('\x1b[36mName project\x1b[0m : ', (app => {

let doProject = new Construction();
let writeCode  = new Writer();

   fs.exists(app, (err => {
   		if (!err){

			  doProject.createModules(app);
        writeCode.justWrite(app)
   		}else{
   			console.log('Folder exists')
   		}

   }));



  rl.close();
}));
