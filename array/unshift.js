let numbs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; //16

for(let i = numbs.length; i >= 0; i--) {
  numbs[i] = numbs[i - 1];
}
numbs[0] = 13;

console.log(numbs)
