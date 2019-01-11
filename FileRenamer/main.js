const fs = require('fs');
var Folder = '.';


var files = fs.readdirSync(Folder);
files.forEach(file=>{
        var path = "./" + file;
  if (fs.statSync(path).isDirectory()) {
      console.log(path);
      var subfiles = fs.readdirSync(path);
      subfiles.forEach(subfile=>{
        var savepath = path + "/" +subfile;
        if (fs.statSync(savepath).isFile() && savepath.indexOf(".mkv") > -1) {
          var subPath = path + "/" + subfile;
          console.log("original: ",subPath);
          var subGoal = path + "/" + file;
          console.log("file: ", file);
          console.log("goal: ",subGoal);
          fs.renameSync(subPath, subGoal);
        }
      })
  }

})
