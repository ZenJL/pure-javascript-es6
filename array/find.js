const todos = [
  {
    text: 'learn abc',
    status: 'new'
  },
  {
    text: 'learn javascrt',
    status: 'inprocess'
  }
]

const getTodoNew = todos.find(todo => todo.status === 'new');

console.log(getTodoNew)

// 1/ Checking whether a value exists in an array
const fruits = ['apple', 'banana', 'mango', 'guava']
function checkAvailability(arrays, value) {
  const result = arrays.some(element => element === value)
  return result;
}
console.log('checkAvailability: ', checkAvailability(fruits, 'kela')) // false
console.log('checkAvailability: ', checkAvailability(fruits, 'banana')) // true


const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

function findInventory(value) {
  return inventory.find(inven => inven.name === value)
}

console.log('findInventory: ', findInventory('bananas'));
// { name: 'cherries', quantity: 5 }

