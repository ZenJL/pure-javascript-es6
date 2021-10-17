// export no default
export function sayHi(user) {
  return `I am ${user}`
}

// export from declaration
function sayBye() {
  return `sayBye`
}

function sayHello() {
  return `sayHello`
}

// export as
function getName() {
  return `getName`
}

function getAge() {
  return `getAge`
}


// export default
// export default function demoDefault() {
//   return `demoDefault`
// }

// export as default
function demoDefault() {
  return `demoDefault`
}

export {
  sayBye,
  sayHello,
  getAge as fetchAge,
  getName as fetchName,
  demoDefault as default
}