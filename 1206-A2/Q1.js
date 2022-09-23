//1.Write a function to find the sum of the elements inside the array
const arr1 = [1,2,3,4,5,6,7];

function sumAll(){
  let sum = 0;
  for (let i = 0; i < arr1.length; i++){
    sum += arr1[i];
  }
  return sum;
}

console.log("the sum of the array is " + sumAll());
