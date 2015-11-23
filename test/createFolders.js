
var mkdirp = require('mkdirp')
  , fs = require('fs')

var folders = [
    {name:'folder1'}
    ,{name:'folder2'}
    ,{name:'folder3'}
  ]
  
for (var i = 0; i < folders.length; i++) {
  mkdirp("./teste/"+folders[i].name,(err => {
    if (err) console.error(err)
  }))
 console.log('   \x1b[35mcreate\x1b[0m : ' + folders[i].name)
}
