// 4. Write a function to find the factorial of a given number n

function factorial (n){
  if (n==0 || n==1){
    return 1;
  }
  return factorial(n-1)*n;
} 

factorial(10)