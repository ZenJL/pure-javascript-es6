var hositingA;

// compare reference
const objA = {} // memory A
const objB = {} // memory B
objA.book = 'sieunhan'

// console.log(objA === objB) // output: false
console.log(objB)

const objC = {}; // memory C
const objD = objC; // objectD -> memory C

objC.name = 'truong'

console.log(objC === objD) // output: true

// function
function Person(name, age, gender) {
  this.name = name,
  this.age = age,
  this.gender = gender
}

Person.prototype.printOut = function() { // method
  console.log('printout: ', this.name)
}

Person.prototype.setAge = function() { // method
  console.log('setAge: ', this.age)
}

const person = new Person('truong', 19, 'male');

person.printOut();
person.setAge();

// property
// method


// undefiend
let x;

console.log(x)

// null
function getFood(element) {
  const str = element.match('abc')
  console.log(str)
}

getFood('meat')

// coercion

console.log('coercion: ', "12" - 30) // "12" -> Number(12) -> 12
console.log('coercion: ', 30 - "abc") // "abc" -> Number('abc') -> NaN
// minh: 30abc
// long: 30 - abc
// NaN

function plus(num1) {
  console.log(Number(num1) - 20)
}

plus({ name: 'bc'})

// truthy & falsy
console.log('abc' === true)




// hosting
console.log('hositingA before: ', hositingA)
hositingA = 1;
console.log('hositingA after: ', hositingA)
