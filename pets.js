










// 'use strict';
// //core node modules
// var fs = require('fs');
// var path = require('path');
// var petsPath = path.join(__dirname, 'pets.json');
// // console.log(__dirname);
//
// //just variables argv parses out
// var node = path.basename(process.argv[0]);
// // console.log(process.argv[0]);
// var file = path.basename(process.argv[1]);
// // console.log(process.argv[1]);
// var cmd = process.argv[2];
// // console.log(process.argv[2]);
// // console.log(typeof(Number(process.argv[3])));
// // console.log(pets.JSON);
//   if (cmd === 'read') {
//     fs.readFile(petsPath, "utf8", function(err, data){
//       if  (err){
//         throw err;
//       }
//       var pets = JSON.parse(data);
//       var index = process.argv[3];
//       /*
//       if there is no index
//         print entire pets array
//       if there is an index
//         and it's less than the length
//         of pets and greater than 0
//         print specified pet
//       */
//       // if (index === undefined) {
//       //   console.log(pets);
//       // } else if(index < pets.length && index > 0){
//       //   console.log(pets[i]);
//       // }
//
//       console.log(pets[index]);
//      console.log(pets);
//       // console.log(pets[1]);
//       // console.log(petsPath);
//     });
//   }
//   else if (cmd ==='create') {
//     fs.readFile(petsPath, 'utf8', function(readErr, data){
//       if (readErr){
//         throw readErr;
//       }
//       var pets = JSON.parse(data);
//        var pet = {
//          age:  Number(process.argv[3]),
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
//     }
//     else {
//       console.error(`Usage: ${node} ${file} [read | create | update | destroy]` );
//     process.exit(1);
//   }
