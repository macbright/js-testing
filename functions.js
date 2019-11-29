
const functions = {
	capitalize: string => string[0].toUpperCase() + string.slice(1),
  reverseString: (string) => string.split('').reverse().join(''),
  calculator: {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b
  }
}

module.exports = functions;