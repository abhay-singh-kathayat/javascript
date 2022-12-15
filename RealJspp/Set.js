//set in javascript
const number = new Set([1,2,2]);

number.add(1);
number.add(2);
number.add(3);
number.add(4);
number.add(5);

console.log(typeof(number));
console.log(number.size);
//chech Number abalivable or not 
console.log(number.has(5)) //it retuns true and false

console.log(number.delete(5))
console.log(number)

//convert into array
console.log([...number]);

number.clear();
console.log(number);
console.log(number.size);

