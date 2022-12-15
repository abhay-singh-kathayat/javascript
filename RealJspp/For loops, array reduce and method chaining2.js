//reduce method in array javascript
const files = ['abhay','index.txt','app.js',89,90.3];
const FilePath = files.reduce((acc,file)=>{
  let fileName = Number(file) ? '':file.trim();
  if(fileName){
    const filePath = `coolAbhay/${fileName}`;
    acc.push(filePath);
  }
  return acc;
},[])

const fileFilterUse = ['index.html','app.js',8490,undefined,null,'  ','<a href="hello Word">'];

let arrayData = [];
fileFilterUse.filter((index,array)=>{
    if(index!=Number(index) && index!=undefined){
        let fileName = index.trim();
       if(fileName){
        const setName = `hello/${fileName}`;
         //console.log(typeof(setName)) 
         let splitintoArr = setName.split();
         //console.log(splitintoArr)
         arrayData.push(splitintoArr)
       }
      
    }
},[])


arrayData.forEach(function(item){
    //console.log(item);
})



//last is map method 
const app = [ 'foo.txt ', '.bar', '   ', 'baz.foo' ];
const filePathsmap = app.map(file=>file.trim())
.filter(Boolean)
.map(fileName => `/abhay${fileName}`);

console.log(filePathsmap);



