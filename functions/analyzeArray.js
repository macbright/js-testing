/*eslint operator-linebreak: ["error", "before"]*/

const analyzeArray = (arr) => {
	return {
		average: Math.floor(arr.reduce((sum, num) => {
			return sum + num;
		}) / arr.length),
		min: Math.min(...arr),
		max: Math.max(...arr),
		length: arr.length,
	}
}

module.exports = analyzeArray;
