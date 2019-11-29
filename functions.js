
const functions = {
  capitalize: string => string[0].toUpperCase() + string.slice(1),
  reverseString: (string) => string.split('').reverse().join(''),
	calculator: {
		add: (a, b) => a + b,
		subtract: (a, b) => a - b,
		divide: (a, b) => a / b,
		multiply: (a, b) => a * b
	},
	encrypt: ((string, key) => {
		const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
		const encrypted = [];
		string.toLowerCase().split('')
			.map((value) => {
				abc.indexOf(value) === -1 ?
				value === ' ' ? encrypted.push(' ') : false
					:
  				encrypted.push(abc[(abc.indexOf(value) + key) % 26])
			});
		return encrypted.join('');
	}),
	decrypt: ((string, key) => {
		const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
		const decrypted = [];
		string.toLowerCase().split('')
  		.map((value) => {
  		abc.indexOf(value) === -1 ?
				value === ' ' ? decrypted.push(' ') : false
					:
					(abc.indexOf(value) - key) % 26 < 0 ?
						decrypted.push(abc[((abc.indexOf(value) - key) % 26) + 26])
						:
						decrypted.push(abc[((abc.indexOf(value) - key) % 26)]);
			});
		return decrypted.join('');
	}),
	analyzeArray: (arr) => {
		return {
			average: Math.floor(arr.reduce((sum, num) => {
				return sum + num;
			}) / arr.length),
			min: Math.min(...arr),
			max: Math.max(...arr),
			length: arr.length,
    }
  }
};	
module.exports = functions;