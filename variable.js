var hositingA;
var globalX = 1; // global variable
globalX = 20; // assignment allow


function getA() {
  console.log('getA: ', globalX)
}


function getB() {
  console.log('getB: ', globalX)
}

getA();
getB();

// function scope
function functionScope() {
  var bar = 1;
  console.log('functionScope: ', bar)
}
functionScope();
// console.log('functionScope: ', bar)

// hosting var
console.log('hositingA before: ', hositingA)
hositingA = 1;
console.log('hositingA after: ', hositingA)
// var hositingA;
// hositingA = 1;


// let
// console.log('letHoistingA before: ', letHoistingA)
// let letHoistingA = 1;


const truong = true
if(truong) {
  var abcAbc = 1
  console.log(abcAbc)  
} 


console.log(abcAbc)  

const tryCatch = 'abc';

try {
  tryCatch = 123
} catch(error) {
  console.log(error)
}


