//Q1
let student = [ {
  name: "Daniel",
  email: "daniel@gmail.com", 
  marks: [80, 60, 50, 70, 95]
  }, {
  name: "Mark",
  email: "mark@gmail.com", 
  marks: [99, 40, 84, 72, 60]
  }, {
  name: "Stacy",
  email: "stacy@gmail.com", 
  marks: [8, 30, 11, 0, 20]
  }, {
  name: "Geri",
  email: "geri@gmail.com",
  marks: [100, 99, 95, 85, 99]
  } ];

  function studentWithHighestMarks(array){
    let studentMark = student.map((student) => {
      var each = student.marks
      let sum = each.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      })
     console.log(`The student ${student.name} total marks is ${sum}`)
    })
  }
  studentWithHighestMarks(student)

//Q2
// Write a function to find the missing number in the array whose value ranges from 0 —> n, Example 1
// Let array = [ 4, 5, 2, 1, 0 ] , Here the missing number is 3, so you have to find it

let array1 = [ 4, 5, 2, 1, 0 ];
let array2 = [2, 1, 0, 3, 7, 6, 4, 5, 10, 9];

function missingNumber(array, n) {
  let number = [];
  for (let i = 0; i<=n; i++){
    if(!array.includes(i)){
      number.push(i)
    }
  }
  console.log(`The missing number is ${number}`);
}
missingNumber(array1,5);
missingNumber(array2,10);