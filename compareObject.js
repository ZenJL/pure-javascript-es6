// manual compare object
const myHero = {
  name: 'superman',
  title: 'man',
  age: 20,
}

const myHero2 = {
  age: 20,
  name: 'superman',
  title: 'man',
}

function isManualEqual(obj1, obj2) {
  return obj1.name === obj2.name && obj1.title === obj2.title && obj1.age === obj2.age
}

console.log('isManualEqual: ', isManualEqual(myHero, myHero2))

// shallow equality object
function isShallowQuality(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if(keys1.length !== keys2.length) return false;

  for(let key of keys1) {
    if(obj1[key] !== obj2[key]) return false;
  }

  return true;
}

console.log('isShallowQuality: ', isShallowQuality(myHero, myHero2))

// deep equality object
const myBook = {
  author: 'tony',
  price: 200,
  age: 20,
  address: {
    city: 'tphcm',
    district: 10,
    region: 'vn'
  }
}

const myBook2 = {
  author: 'tony',
  price: 200,
  age: 20,
  address: {
    city: 'tphcm',
    region: 'vn'
  }
}

function isDeepEquality(obj1, obj2) {
  const keys1 = Object.keys(obj1); // ['author', 'price', 'age', 'address', 'name']
  const keys2 = Object.keys(obj2); // ['author', 'price', 'age', 'address', 'phone']

  if(keys1.length !== keys2.length) return false;

  for(let key of keys1) {
    const val1 = obj1[key];
    const val2 = obj2[key]
    const areObject = isObject(val1) && isObject(val2);
    // author: string -> false && !isDeepEquality(val1, val2) -> false || !areObject && val1 !== val2 -> !areObject && val1 !== val2

    if (areObject && !isDeepEquality(val1, val2) || !areObject && val1 !== val2)  {
      return false
    }
  }

  return true;
}

function isObject(value) {
  // value: null
  // return true && false -> false
  // value: { name: 'truomg' }
  // return true && true -> true
  return value !== null && typeof value === 'object' 
}
console.log('isDeepEquality: ', isDeepEquality(myBook, myBook2))