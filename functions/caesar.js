/* eslint operator-linebreak: ["error", "before"] */

const caesar = {
	encrypt: ((string, key) => {
		const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
		const encrypted = [];
		string.toLowerCase().split('')
			.forEach((value) => {
				if (abc.indexOf(value) === -1) {
					if (value === ' ') {
						encrypted.push(' ');
					} else {
						false; /*eslint-disable-line no-unused-expressions */
					}
				} else {
					encrypted.push(abc[(abc.indexOf(value) + key) % 26]);
				}
			});
		return encrypted.join('');
  }),
  decrypt: ((string, key) => {
    const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const decrypted = [];
    string.toLowerCase().split('')
      .forEach((value) => {
        if (abc.indexOf(value) === -1) {
          if (value === ' ') {
            decrypted.push(' ');
          } else {
            false; /*eslint-disable-line no-unused-expressions */
          }
        } else {
          if ((abc.indexOf(value) - key) % 26 < 0) { /*eslint-disable-line no-lonely-if */
            decrypted.push(abc[((abc.indexOf(value) - key) % 26) + 26]);
          } else {
            decrypted.push(abc[((abc.indexOf(value) - key) % 26)]);
          }
        }
      });
    return decrypted.join('');
  })
};

module.exports = caesar;
