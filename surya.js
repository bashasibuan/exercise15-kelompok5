function longestPrefix(arr) {

	let result = arr[0];
	let length = result.length;

	for (let i = 1; i < arr.length; i++) {
		while (arr[i].indexOf(result) !== 0) {
			result = result.substring(0, length - 1);
			length--;

			// Check for an empty case and return if true
			if (result === '') {
				return 'huruf nya ga ada';
			}
		}
	}

	return result;
}

export default longestPrefix();