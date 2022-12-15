// //Code Anatomy - For loops, array reduce and method chaining
let files = ['foo.text',', ','.bar',' ',null,undefined,0.93,'baaz.foo'];
let filePath = [];
files = files.filter(function(emement){
   return emement!=undefined && emement!=null && emement!=Number(emement) && emement==emement.trim();
})

console.log(files);
//for in loop returns number
for(let file of files){
    const fileName = file.trim();
    if(fileName){
    const filePaths = `~/cool_app/${fileName}`;
    filePath.push(filePaths);
    }
}

console.log(filePath);



// const files = [ 'foo.txt ', '.bar', '   ', 'baz.foo' ];
// let filePaths = [];

// for (let file of files) {
//   const fileName = file.trim();
//   if(fileName) {
//     const filePath = `~/cool_app/${fileName}`;
//     filePaths.push(filePath);
//   }
// }

// console.log(filePaths)