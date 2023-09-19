function tanggalMin() {
	// let maximumDate = new Date(Math.max.apply(null, dates));
	let minimDate = new Date(Math.min.apply(null, dates));

	// console.log("Max date is - " + maximumDate);
	console.log("Min date is - " + minimDate);
}

// export default tanggalMin();
module.exports = tanggalMin();