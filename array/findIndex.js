const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

const names = ['truong', 'abc', 'minh', 'hoang'];

// indexOf
const indexOf = names.indexOf('bananas')
console.log('indexOf: ', indexOf)

// findxIndex
const findIndexArrowFunction = inventory.findIndex(ele => ele.name === 'bananas')
const findIndex = inventory.findIndex(function(_, __, array) {
  console.log(array)
})
console.log('findxIndex: ', findIndex)



// exes:
// console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1, not found
// console.log([4, 6, 7, 9, 12].findIndex(isPrime)); // 2 (array[2] is 7)

const arryNumbs = [4, 6, 8, 9, 12];
const isPrime = 12

function findPrime(ele, index, array) {
  return ele === isPrime
}
// const res = arryNumbs.findIndex(findPrime)
const res = arryNumbs.findIndex(function (ele, index, array) {
  return ele === isPrime
})

console.log('res: ', res)