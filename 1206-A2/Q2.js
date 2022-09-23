// 2. Using a function for loop print all even numbers up to n (parameter in function);

function findEven(n){
  for(let i = 0; i < n;i++){
    if (i%2 == 0){
      console.log(i);
    }
  }
}
findEven(10);