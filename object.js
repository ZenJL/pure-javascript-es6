// format object
const myCar = {
  // models: 'BMW', // string
  "model-car": 'Vovlo',
  weight: 200, // number
  isExpensive: true, // boolean
  colors: ['#000', '#f00'], // array
  agent: { // nested object
    title: 'truong',
    address: '1234 Abc'
  },
  '3': 3,
  getColors: function() {
    console.log(this.colors)
  }
}

// access properties object
// way1
console.log(myCar.weight)
console.log('3: ', myCar['3'])

// way2
console.log(myCar['model-car'])

myCar.getColors()

// loop object: for ... in
console.log('=== loop object')
for(let keys in myCar) {
  console.log('for...in keys myCar: ', keys)
}

console.log('object keys: ', Object.keys(myCar));
console.log('object values: ', Object.values(myCar));
console.log('object entries: ', Object.entries(myCar));

// clone object
const objectA = { a: 1, b: 2 }
const myObject2 = { a: 10, d: 4}

// es6
console.time("es6: Time this");
const objectB = { ...myObject2, ...objectA, e: 5, f: 6 } // shallow clone , not deep clone
console.timeEnd("es6: Time this");

// es5: Object.assign()
console.time("es5: Time es5");
const objectC = Object.assign({}, myObject2, objectA)
console.timeEnd("es5: Time es5");

console.log('es6: ', objectB)
console.log('es5: ', objectC)

// delete object
const myDelete = {
  firstName: 'truong',
  lastName: 'tony'
}

delete myDelete.firstName

console.log('delete obj: ', myDelete)

const mayArrr = [1,2,3]

delete mayArrr[1]

console.log('delete arry: ', mayArrr)