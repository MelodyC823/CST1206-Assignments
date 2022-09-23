//Q7

let star = "";
function printStar(n){
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      star += "*";
    }
    star += "\n";
  }
  for (let i = 1; i <= n - 1; i++) {
    for (let j = 0; j < n - i; j++) {
      star += "*";
    }
    star += "\n";
  }
  console.log(star);
}

printStar(7)
