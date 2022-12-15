//Recursion Recrusive Function In Javascript
//Recrusive function Working Like Loop

// function recruSiveFunction(){
//     console.log("Test");
//     recruSiveFunction();
// }

// recruSiveFunction();


//Recursion using Loop  
//it is Working Like loop
let count = 1;
function recruSiveFunctionLoop() {
    // console.log(`Recursive ${count}`);
    if (count === 10) return;
    count++;
    recruSiveFunctionLoop();
}

recruSiveFunctionLoop();




//Odd Even Number Function in Array
function oddArray(arr) {
    let result = [];
    function helperRecursiveFn(arr) {
        if(arr.length === 0) {
            return; // 1
        //Find Even Odd Number When Change This Condition Only 
        } else if(arr[0] % 2 !== 0) {
            result.push(arr[0]); // 2
        }
        helperRecursiveFn(arr.slice(1)); // 3
    }
    helperRecursiveFn(arr);
   // console.log(result);
    return result;
}

oddArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


//Linear Search Algorithm Javascript Function

const arratData = [10,12,90,38,89,21];

function CheckNumber(arratData,n){
   for(i=0;i<arratData.length;i++){
      if(n===arratData[i]){
        //console.log("Done")
        return `${true} ${n} exists at index ${i}`;
      }
   }
 //  console.log("Not Avaliable")
   return `${false} ${n} does not exist in the given array.`;
}

CheckNumber(arratData, 10);









