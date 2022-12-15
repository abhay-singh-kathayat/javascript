//findMiddleIndex Of array Data 
//Binary And Liner Search In javascrit alogo

// const array = [2, 3, 6, 8, 10, 12];
// let firstIndex = 0;
// let lastIndex = array.length -1;
// let middleIndex = Math.floor((firstIndex+lastIndex)/2);
// console.log(middleIndex);

//aakhon main tum base ho sapne hazar banke


function findIndex(array,element){
  let firstIndex = 0;
  let lastIndex = array.length -1;
  let middleIndex = Math.floor((firstIndex+lastIndex)/2);

  //use While Loop
  while(array[middleIndex]!==element, firstIndex<=lastIndex){
        if(array[middleIndex] > element){
            lastIndex = middleIndex -1;
        }else{
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((firstIndex+lastIndex)/2);
    
  }
  console.log(middleIndex);
  return array[middleIndex] === element ? middleIndex : -1;

}

const array =[2, 3, 6, 8, 10, 12];

findIndex(array,12);



//Linear Search Algorithm Javascript Function
const arratData = [10,12,90,38,89,21];

function CheckNumber(arratData=[10,12,90,38,89,21],n="10"){
   for(i=0;i<arratData.length;i++){
      if(n===arratData[i]){
        return `${true} ${n} exists at index ${i}`;
      }
   }
 //  console.log("Not Avaliable")
   return `${false} ${n} does not exist in the given array.`;
}


