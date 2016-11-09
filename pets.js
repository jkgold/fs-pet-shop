'use strict';
//core node modules
var fs = require('fs');
var path = require('path');
var petsPath = path.join(__dirname, 'pets.json');

//just variables argv parses out
var node = path.basename(process.argv[0]);
// console.log(process.argv);
var file = path.basename(process.argv[1]);
var cmd = process.argv[2];
// console.log(node);

if (cmd === 'read') {
  fs.readFile(petsPath, "utf8", function(err, data){
    if  (err){
      throw err;
    }
    var pets = JSON.parse(data);
    console.log(pets);
  });
}
else if (cmd ==='create') {
  fs.readFile(petsPath, 'utf8', function(readErr, data){
    if (readErr){
      throw readErr;
    }
    var pets = JSON.parse(data);
     var pet = process.argv[3];

     if(!pet) {
       console.error(`Usage: ${node} ${file} ${cmd} PET`);
       process.exit(1);
       }

       pets.push(pet);

        var petsJSON = JSON.stringify(pets);

        fs.writeFile(petsPath, petsJSON, function(writeErr){
          if(writeErr){
            throw writeErr;
          }
          console.log(pet);
      });
    });
  }
  else {
    console.error(`Usage: ${node} ${file} read`);
  process.exit(1);
}
