const names = ['Truong', 'truabc', 'hoang', 'yen']
names.sort();

console.log('names: ', names)

const numbers = [1000, 70, 30, 80, 10]
numbers.sort(function(a, b) {
  if(a < b) return -1;
  if(a > b) return 1;
  return 0;
});

// console.log('numbers: ', numbers)


const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 },
]

// 1/ Sort by name ascending
var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 },
]

// 1/ Sort by name ascending
const sortName = items.sort(function (a, b) {
  if (a.name < b.name) {
    return -1
  }
  if (a.name > b.name) {
    return 1
  }
  return 0
})
console.log(sortName)

// 2/ Sort by value ascending
const sortValue = items.sort(function (a, b) {
  if (a.value < b.value) {
    return -1
  }
  if (a.value > b.value) {
    return 1
  }
  return 0
})
console.log(sortValue)
