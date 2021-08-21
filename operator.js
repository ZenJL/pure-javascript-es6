var num;

num = 10 // assgiment
num += 10


console.log(num)

// logical

// &&
console.log('-> operator &&')
console.log(true && true)
console.log(false && true)
console.log(1 === 1 && 'abc' === 'abc') // true && true

/// if side left is true, return value side right.
console.log(true && 'it is true')

/// if side left is false, return value side left.
console.log(false && 'it is true')

// || -> check all value is fasly
const number = 20 
console.log('-> operator ||')
console.log(false || 'abc') // output: true
console.log(number === 10 || 'number is not 10' )
console.log(0 || "")

// !
console.log('-> operator !')
const operatorNum = 10 === 10 // true
console.log(!operatorNum) // -> !true => false ; !false => true

// ?? -> check value is null or undefiend
console.log('-> operator ??')
console.log(0 ?? "")

console.log(true == undefined) // true -> Number('1') == 1 

console.log(1 == true) // true => Boolean(1) == true -> true == true
console.log(0 == true) // false => Boolean(0) == true -> false == true

// 0 => false
// 1 => true  

console.log(1 == 20) // false, // true 
// 1. Boolean(true) == 1 -> 1 == '0'
// 2. Number('0') -> 1 == 0

console.log(!null) // -> fasly -> boolean  true, false

console.log(0 == !! null)
// 0 == !null -> 0 == true
// 0 == !true -> 0 == false //number vs boolean
// Boolean(0) == false -> fasle == false -> true
