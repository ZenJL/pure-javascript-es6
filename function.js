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


/* === return statement ===*/
// clean code if else
function getMonths(month) {
  // clean code
  if (month === 'Jan') return 'Jamuary';
  if (month === 'Feb') return 'Febuary'
  return 'Other months' 

  // if (month === 'Jan') {
  //   return 'Jamuary'
  // } else if (month === 'Feb') {
  //   return 'Febuary'
  // } else {
  //   return 'Other months'
  // }
}

const myReturn = getMonths('Abc')
console.log(myReturn)

let fullName = '';
function getFullName(fname, lname) {
  if(fname === '' || lname === '') {
    fullName = 'no name';
    return;
  }
  fullName = `${fname} ${lname}`

  // if(fname === '' || lname === '') {
  //   fullName = 'no name'
  // } else {
  //   fullName = `${fname} ${lname}`
  // }
}

getFullName('', 'tony')
console.log(fullName)
console.log(getFullName('', 'tony'))


/* === function expression === */
console.log('=== function expression')
const myExpressionFunc = function(width, height) {
  return width * height
}
console.log(myExpressionFunc(10, 20))

// not hosting
// var myHoisting;
console.log(myHoisting);
var myHoisting = function(x) {
  return x 
}
console.log(myHoisting(10));
