// 3. Write a function take a string as a parameter, Check if a string contains the letter “y”. If yes print "YES" and only one time.

function findY(y){
  if (y.includes("y") || y.includes("Y")){
    console.log("Yes");
  }else{
    console.log("No");
  }
}
findY("cra");