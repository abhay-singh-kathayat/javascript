//Native JavaScript Data Structures
const number = [1,2,3];
const string = Array.from('abhay');

console.log(number.push(1));  //this is the returning the length of array means 4
console.log(number.push(2,4));
console.log(string.unshift('a'));
console.log(string)


//let's check the length of each and every element
console.warn(number.length + "Check Length")
string[0];
string[2];

//get specific Element
const sliceNumber = number.slice(1,3);
console.log(sliceNumber+"SliceNumbers")
const mapEachAndEveryElment = number.map((numbers)=>{
   return numbers * 2;
})
console.log(number + "For Testing")
let filter = number.filter(function(iteam){
  return iteam % 2 ===0;
})
console.log(filter)

const reduce = number.reduce(function(a,n){
    console.log(a+"Test"+"</br>");
    //console.log(n+"Test");
  return a+n , 0;
})
console.log(number.reduce((a, n) => a + n, 0));

array.reverse();                  // ['t', 's', 'e', 't']
string.join('');                   