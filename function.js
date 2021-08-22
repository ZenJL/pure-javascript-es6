function sayHi(fname, lname) {
  return fname + lname
}

const result = sayHi('trtuong', 'tony')

console.log(result) // truong tony

// minh -> truong
// long -> errror

let x = 10 // global variable
function getPlus(num) {
  x = x + num
}
getPlus(10); // x = 10 + 10
console.log(x) // output: 20

// long -> 10
// minh -> 10


function getPlus(num) {
  let abc = 10 
  const newValue = abc + num // newValue = 10 + 20
  return newValue // 30
}

const resultGetPlus = getPlus(20);
// getPlus(20);

console.log(resultGetPlus) // output: 30