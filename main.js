const fs = require('fs');
var Folder = '/mnt/hdd1/Download/'
// var Folder = './test'

fs.readdir(Folder, (err, files) => {
    files.forEach(file => {
        var FileName = file.toString();
        var OriginalName = FileName;  
        var mkv = FileName.indexOf('.mkv');
        var stelle = FileName.indexOf(']');
        var stelleZwei = FileName.indexOf(')');
        var Jahrtest = FileName.indexOf('(20');
        var Jahrgeneral = FileName.indexOf('20');
        var ersteKlammer = FileName.indexOf('(');
        console.log(FileName, '--> ', stelle, stelleZwei, Jahrtest, ersteKlammer, Jahrgeneral);

        if (stelle == -1 && stelleZwei == -1 && Jahrtest == -1 && Jahrgeneral == -1) {
            console.log(FileName);
            
            return;
        }

        if (stelle != -1 && stelle < 7){
            FileName = FileName.slice(stelle+1);
            FileName = FileName.trim();
            if (mkv != -1){
                FileName = FileName+".mkv";
            };
            console.log(FileName);
            rename(OriginalName, FileName);

            return;
        }

        if (Jahrtest != -1){
            if (stelleZwei != -1) {
                FileName = FileName.slice(0, stelleZwei+1);
                FileName = FileName.trim();
            if (mkv != -1){
                FileName = FileName+".mkv";
            };
            console.log(FileName);
            rename(OriginalName, FileName);
            return;
            }

        } else {
            FileName = FileName.slice(0, ersteKlammer);
            FileName = FileName.trim();
            var save = FileName.slice(0,Jahrgeneral);
            FileName = save + "(" + FileName.slice(Jahrgeneral) + ")";
            
            
            if (mkv != -1){
                FileName = FileName+".mkv";
            };
            rename(OriginalName, FileName);
            console.log(FileName);
            
        }

        function rename(oldName, newName){
            var FilePath = '/mnt/hdd1/Download/' + oldName;
            var GoalPath = '/mnt/hdd1/Download/' + newName;
    
            fs.rename(FilePath, GoalPath, (err) => {
                if (err) throw err;
                console.log('Rename complete!');

                
              });
        }

       



        



        
        
    });
});
