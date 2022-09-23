// 8. Write a function to reverse a string

function reverseStr(a) {
  var revString = "";
  for (var i = a.length - 1; i >= 0; i--) {
      revString += a[i];
  }
  return revString;
}
reverseStr("world");
