// 6. Write a function which prints the star pattern like that for the given value n
// *
// **
// ***
// ****
// *****
// ******
// *******


let star = "";
function starPrint(n){
  for (let i = 1; i<=n; i++){
    for (let j = 0; j<i;j++){
      star += "*";
    } star += "\n";
  }  console.log(star);
}
starPrint(7)
