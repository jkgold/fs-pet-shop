'use strict';

var fs = require('fs');
var path = require('path');
var petsPath = path.join(__dirname, 'pets.json');

var node = path.basename(process.argv[0]);
 // console.log(process.argv[0]);
 var file = path.basename(process.argv[1]);
 var cmd = process.argv[2];

if( cmd === 'read') {
  fs.readFile(petsPath, 'utf8', function(err, data) {
    if (err){
      throw err;
    }
    var index = Number.parseInt(process.argv[3]);
    var pets = JSON.parse(data);

    if(Number.isNaN(index)){
      console.log(pets);
      process.exit();
    }
    console.log(pets[index]);

      if (index < 0 || index >= pets.length) {
        // console.log(pets);
        console.error(`Usage: ${node} ${file} read INDEX`);
        process.exit(1);
      }
    });
}
else if
    (cmd === 'create') {
      fs.readFile(petsPath, 'utf8', function(readErr, data) {
        if(readErr) {
          throw readErr;
        }

      var pets = JSON.parse(data);
      // var age = Number.parseInt(process.argv[3]);
      var pet = {
        age: Number.parseInt(process.argv[3]),
        kind: process.argv[4],
        name: process.argv[5]
      }
      console.log("HERE'S OUR NEW PET!", pet);

      // SOMETHING ISN'T WORKING HERE LIKE WE EXPECT
      // if(!pet)  {
      if(!pet.age || !pet.kind || !pet.name)  {
        console.error(`Usage: ${node} ${file} create AGE KIND NAME`);
        process.exit(1);
      }

      pets.push(pet);
      var petsJSON = JSON.stringify(pets);

      fs.writeFile(petsPath, petsJSON, function(writeErr){
        if(writeErr){
          throw writeErr;
        }
        console.log(petsJSON);
      });
    });
  }
  else {
  console.error(`Usage: ${node} ${file} [read | create | update | destroy]` );
   process.exit(1);
 }
    //    else {
    //    console.error(`Usage: ${node} ${file} [read | create | update | destroy]` });
    //     process.exit(1);

 // 'use strict';
 //  //core node modules
 //  var fs = require('fs');
 //
 //         if (index === undefined) {
 //         console.log(pets);
 //         console.log(pets);
 //         } else if(index < pets.length && index > 0){
 //           console.log(pets[i]);
 //         }
 //
 //       console.log(pets[index]);
 //    //   console.log(pets[index]);
 //      console.log(pets);
 //       // console.log(pets[0]);
 //        // console.log(pets[1]);
 //      // console.log(petsPath);
 //      });
 //    // }
 //    else if (cmd ==='create') {
 //     fs.readFile(petsPath, 'utf8', function(readErr, data){
 //       if (readErr){
 //         throw readErr;
 //       }
 //       var pets = JSON.parse(data);
 //        var pet = {
 //         age:  Number(process.argv[3]),
 //          kind: process.argv[4],
 //          name: process.argv[5],
 //        }
 //
 //
 //        if(!pet) {
 //          console.error(`Usage: ${node} ${file} ${cmd} PET`);
 //          process.exit(1);
 //          }
 //
 //          pets.push(pet);
 //
 //           var petsJSON = JSON.stringify(pets);
 //
 //           fs.writeFile(petsPath, petsJSON, function(writeErr){
 //             if(writeErr){
 //               throw writeErr;
 //             }
 //             console.log(pet);
 //         });
 //       });
 //   }
 //    else {
 //      console.error(`Usage: ${node} ${file} [read | create | update | destroy]` );
 //     process.exit(1);
 //   }

//
//     var pets = JSON.parse(data);
//
//     // console.log(pets);
//   if (Number.isNaN(index) || index < 0 || index >= pets.length) {
//     console.log(pets);
//   }
//   console.log(pets[index]);
//   });
// }
//
// else if(cmd === "create"){
//   fs.readFile (petsPath, 'utf8', function(readErr, data){
//     if (readErr) {
//       throw readErr;
//     }
//     var pets =JSON.parse(data);
//     var pets = {
//       age: Number(process.argv[4]),
//       kind:  process.argv[5],
//       name: process.argv[6]
//     }
//       if(!pet) {
//           console.error(`Usage: ${node} ${file} creat AGE KIND NAME`);
//          process.exit(1);
//           }
//
//          pets.push(pet);
//
//          var petsJSON = JSON.stringify(pets);
//
//            fs.writeFile(petsPath, petsJSON, function(writeErr){
//              if(writeErr){
//                throw writeErr;
//               }
//              console.log(pet);
//          });
//        });
//       }
//   })
// }
//
