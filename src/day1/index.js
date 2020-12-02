const { test, readInput } = require("../utils")

const prepareInput = (rawInput) => rawInput.replace( /\n/g, ' ' ).split( ' ' )
.map((input) => Number(input));

const input = prepareInput(readInput())
// 259716
const goA = (input) => {
  let result;
  input.forEach((i) => {
    input.forEach((j) => {
      if (0 === 2020 - i - j) result = i * j;
    });
  });
  return result;
}

// 120637440
const goB = (input) => {
  let result;
  input.forEach((i) => {
    input.forEach((j) => {
      input.forEach((k) => {
        if (0 === 2020 - i - j - k) result = i * j * k;
      });
    });
  });
  return result;
}

/* Tests */

// test(result, expected)

/* Results */

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)
