function main(numArray) {
	let sum = 0;
	let inverseSum = 0;

	let concatNumArray = "";

	for (let i = 0; i < numArray.length; i++) {
		sum = sum + numArray[i];
		inverseSum = inverseSum + 1 / numArray[i];
		concatNumArray = concatNumArray.concat(numArray[i]);
	}

	/*	for (let item of numArray) {
		sum = sum + item;
		inverseSum = inverseSum + 1 / item;
		concatNumArray = concatNumArray.concat(item);
	}
*/
	console.log(sum);
	console.log(inverseSum.toFixed(4));
	console.log(concatNumArray);
}
main([1, 2, 3]);
main([2, 4, 8, 16]);
