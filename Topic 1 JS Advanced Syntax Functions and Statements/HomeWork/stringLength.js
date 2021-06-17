function main(a, b, c) {
	let totalLength = a.length + b.length + c.length;
	let averageLength = Math.floor(totalLength / 3);
	console.log(totalLength);
	console.log(averageLength);
}
main("chocolate", "ice cream", "cake");
main("pasta", "5", "22.3");
