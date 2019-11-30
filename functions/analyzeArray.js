/* eslint operator-linebreak: ["error", "before"] */

const analyzeArray = (arr) => { /*eslint-disable-line arrow-body-style */
	return {
		average: Math.floor(arr.reduce((sum, num) => { /*eslint-disable-line arrow-body-style */
			return sum + num;
		}) / arr.length),
		min: Math.min(...arr),
		max: Math.max(...arr),
		length: arr.length
	};
};

module.exports = analyzeArray;
