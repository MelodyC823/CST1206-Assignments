// 5. // Write a function which accepts 4 parameters (different scores of a student for subjects), and
// then calculate the average of all the score.
// If the average is more than 90 , then console grade A
// If the average is between 70 and 90 , then console grade B
// If the average is between 50-70, then console grade C
// Other wise console grade F

function score(a,b,c,d){
  let ave = (a+b+c+d)/4;
  if (ave >= 90){
    console.log("You got A.");
  } else if (ave >= 70){
    console.log("You got B.");
  } else if (ave >= 50){
    console.log("You got C.");
  }else{
    console.log("You got F.");
  }
}
score(90,80,90,90);