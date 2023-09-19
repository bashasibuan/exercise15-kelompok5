function tanpaSort(inputString) {

    const char = inputString.split('');
    

    for (let i = 0; i < char.length - 1; i++) {
      for (let j = 0; j < char.length - i - 1; j++) {
        if (char[j] > char[j + 1]) {
    
          const temp = char[j];
          char[j] = char[j + 1];
          char[j + 1] = temp;
        }
      }
    }

    return char.join('');
  }

function pakaiSort(inputString) {

    const char = inputString.split('');

    return char.sort().join('');
  }

  module.exports = tanpaSort();
  module.exports = pakaiSort();
  
function tanggalMin() {
	
	let minimDate = new Date(Math.min.apply(null, dates));

	
	console.log("Min date is - " + minimDate);
}


module.exports = tanggalMin();
function calculateArray(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
      }
    }
  
    return sum;
  }


  module.exports = calculateArray();
function longestPrefix(arr) {

	let result = arr[0];
	let length = result.length;

	for (let i = 1; i < arr.length; i++) {
		while (arr[i].indexOf(result) !== 0) {
			result = result.substring(0, length - 1);
			length--;


			if (result === '') {
				return 'huruf nya ga ada';
			}
		}
	}

	return result;
}


module.exports = longestPrefix();
