const mkdirp = require('mkdirp');
const readline = require('readline');
const fs = require('fs');


let rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout
});

rl.question('\x1b[36mName project\x1b[0m : ', (app => {
   fs.exists(app, (err => {
    if (!err){
    mkdirp(`./${app}`, err => {
       if (err) console.error(err)
       else console.log('pow!')
     });
    }else{
        console.log('Folder exists')
     }}));
  rl.close();
}));

