import mkdirp from 'mkdirp';
import readline from 'readline';
import Construction from './construction';


let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("name project:", (app => {

let doProject = new Construction();

	doProject.createProject(app);
	doProject.createModules(app);






  rl.close();
}));
